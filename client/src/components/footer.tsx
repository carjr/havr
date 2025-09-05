import { SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";

export function Footer() {
  const services = [
    "Sistemas Personalizados",
    "Apps Mobile",
    "IA WhatsApp",
    "CRM"
  ];

  const products = [
    "Eduflow",
    "OdontoSync",
    "HAZAP"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div className="space-y-4" data-testid="footer-company">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">#</span>
              </div>
              <span className="text-xl font-bold">HAVR Tecnologia</span>
            </div>
            <p className="text-gray-400 leading-relaxed" data-testid="footer-description">
              Transformando negócios com soluções tecnológicas inovadoras e inteligência artificial.
            </p>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="font-semibold mb-4">Serviços</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors block"
                  data-testid={`footer-service-${index}`}
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div data-testid="footer-products">
            <h4 className="font-semibold mb-4">Produtos</h4>
            <div className="space-y-2">
              {products.map((product, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors block"
                  data-testid={`footer-product-${index}`}
                >
                  {product}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div data-testid="footer-contact">
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="text-gray-400" data-testid="footer-email">contato@havrtecnologia.com</div>
              <div className="text-gray-400" data-testid="footer-phone">+55 11 99999-9999</div>
              <div className="flex space-x-4 mt-4" data-testid="footer-social">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="footer-linkedin"
                >
                  <SiLinkedin className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="footer-instagram"
                >
                  <SiInstagram className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="footer-facebook"
                >
                  <SiFacebook className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-gray-400">
            © 2025 HAVR Tecnologia - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
