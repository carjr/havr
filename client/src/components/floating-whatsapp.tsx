import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      data-testid="floating-whatsapp"
    >
      <SiWhatsapp className="text-2xl" />
    </a>
  );
}
