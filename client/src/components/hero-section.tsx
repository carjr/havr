import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function HeroSection() {
  const scrollToSystems = () => {
    const element = document.getElementById('sistemas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center gradient-bg relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-testid="hero-content">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight" data-testid="hero-title">
                Soluções em Tecnologia 
                <span className="text-accent"> sob medida</span> 
                para sua empresa
              </h1>
              <p className="text-xl text-white/90 leading-relaxed" data-testid="hero-subtitle">
                Sistemas personalizados, aplicativos exclusivos e inteligência artificial integrada.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold shadow-lg"
                data-testid="button-demo"
              >
                Solicitar Demonstração
              </Button>
              <Button 
                onClick={scrollToSystems}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold bg-transparent"
                data-testid="button-systems"
              >
                Ver Nossos Sistemas
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8" data-testid="hero-stats">
              <div className="text-white">
                <div className="text-2xl font-bold" data-testid="stat-projects">50+</div>
                <div className="text-sm opacity-90">Projetos Entregues</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold" data-testid="stat-satisfaction">99%</div>
                <div className="text-sm opacity-90">Satisfação Cliente</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold" data-testid="stat-support">24/7</div>
                <div className="text-sm opacity-90">Suporte IA</div>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center hidden" data-testid="hero-illustration">
            <div className="relative">
              <div className="w-96 h-96 relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-8 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute inset-16 bg-white/30 rounded-full flex items-center justify-center">
                  <Bot className="w-32 h-32 text-white" />
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
