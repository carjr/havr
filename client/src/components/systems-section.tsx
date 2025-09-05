import { Button } from "@/components/ui/button";
import { GraduationCap, Activity, MessageSquare } from "lucide-react";
import eduflowImage from "@assets/Flowlino_1757075195548.png";

export function SystemsSection() {
  const systems = [
    {
      icon: GraduationCap,
      title: "Eduflow",
      description: "Gestão completa para escolas com matrícula, pagamentos e comunicação integrada.",
      features: ["Qualificação de Leads", "Previsão de Evasão", "Automação de Cobrança"],
      gradient: "from-accent to-primary",
      image: eduflowImage,
    },
    {
      icon: Activity,
      title: "OdontoSync",
      description: "Gestão integrada para clínicas odontológicas, com agendamento, financeiro e IA.",
      features: ["Gestão de Pacientes", "Agenda Inteligente", "Cobrança Automática"],
      gradient: "from-primary to-accent",
    },
    {
      icon: MessageSquare,
      title: "HAZAP",
      description: "CRM completo para WhatsApp, centralizando atendimentos e métricas de performance.",
      features: ["Filas de Atendimento", "TMA (Tempo Médio)", "Respostas Automáticas"],
      gradient: "from-green-500 to-primary",
    },
  ];

  return (
    <section id="sistemas" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-testid="systems-header">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="systems-title">
            Nossos <span className="text-primary">Sistemas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="systems-subtitle">
            Conheça nossas principais soluções desenvolvidas para diferentes segmentos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover-lift"
              data-testid={`system-card-${index}`}
            >
              <div className="p-8">
                {/* System Logo/Image */}
                {system.image ? (
                  <div className="w-20 h-20 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-2">
                    <img 
                      src={system.image} 
                      alt={`${system.title} logo`}
                      className="w-full h-full object-contain"
                      data-testid={`system-image-${index}`}
                    />
                  </div>
                ) : (
                  <div className={`w-20 h-20 bg-gradient-to-br ${system.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <system.icon className="w-8 h-8 text-white" />
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid={`system-title-${index}`}>
                  {system.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`system-description-${index}`}>
                  {system.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {system.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground" data-testid={`system-feature-${index}-${featureIndex}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid={`button-system-${index}`}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
