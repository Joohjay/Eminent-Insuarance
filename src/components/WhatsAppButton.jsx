import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/255781585781"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
}

export default WhatsAppButton;
