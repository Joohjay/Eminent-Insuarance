import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import Button from './Button';

function CTASection() {
  return (
    <section className="section section-gradient cta-section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Ready to Secure Your Future?</h2>
          <p className="section-subtitle">
            Let our experts help you find the right insurance coverage today. Get a free quote or speak with us directly.
          </p>
          <div className="cta-buttons">
            <Button to="/contact" variant="white">
              Get Started
            </Button>
            <Button to="/contact" variant="outline-light">
              <Phone size={18} /> Contact Us
            </Button>
            <a
              href="https://wa.me/255781585781"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
