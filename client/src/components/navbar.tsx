import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import havrLogo from "@assets/HAVR---INVERSO_1757076947882.png";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-testid="navbar-logo">
            <img 
              src={havrLogo} 
              alt="HAVR Tecnologia" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-inicio"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-servicos"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sistemas')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-sistemas"
            >
              Sistemas
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-sobre"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-contato"
            >
              Contato
            </button>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="button-whatsapp-nav"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Fale Conosco
              </Button>
            </a>
            
            <button 
              className="md:hidden text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-link-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-link-servicos"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('sistemas')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-link-sistemas"
              >
                Sistemas
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-link-sobre"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-link-contato"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
