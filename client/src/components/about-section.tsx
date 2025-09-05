import { Rocket, Users, Clock } from "lucide-react";

export function AboutSection() {
  const advantages = [
    {
      icon: Rocket,
      title: "Inovação Constante",
      description: "Sempre utilizamos as tecnologias mais avançadas",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes e capacitados",
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Atendimento contínuo com IA integrada",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-testid="about-content">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground" data-testid="about-title">
              Sobre a <span className="text-primary">HAVR Tecnologia</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="about-description">
              A HAVR Tecnologia desenvolve soluções inovadoras em software, aplicativos e inteligência artificial. 
              Nosso compromisso é transformar negócios com sistemas inteligentes, escaláveis e personalizados.
            </p>
            <div className="grid grid-cols-2 gap-8" data-testid="about-stats">
              <div>
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-experience">5+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-focus">100%</div>
                <div className="text-muted-foreground">Foco no Cliente</div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border" data-testid="about-advantages">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6" data-testid="advantages-title">
              Por que escolher a HAVR?
            </h3>
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`advantage-${index}`}>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground" data-testid={`advantage-title-${index}`}>
                      {advantage.title}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`advantage-description-${index}`}>
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
