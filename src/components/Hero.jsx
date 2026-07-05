import { motion } from 'framer-motion';
import { ShieldCheck, Clock, HeartHandshake, Award } from 'lucide-react';
import Button from './Button';

function Hero({ title, subtitle, showFloatingCards = true, ctaButtons = true, backgroundImage = '/insurance.jfif' }) {
  const floatingCards = [
    { icon: ShieldCheck, text: 'Trusted Advisors' },
    { icon: Clock, text: 'Fast Claims Support' },
    { icon: HeartHandshake, text: 'Customer Satisfaction' },
  ];

  return (
    <section className="hero" style={{ '--hero-bg': `url(${backgroundImage})` }}>
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-label">
            <Award size={16} />
            Tanzania's Trusted Insurance Partner
          </div>
          <h1 className="hero-title">
            {title || (
              <>
                Protecting What <span className="accent">Matters Most</span>
              </>
            )}
          </h1>
          <p className="hero-description">
            {subtitle ||
              'Eminent Insurance Solutions delivers tailored insurance products for individuals and businesses across Tanzania. Experience reliable protection, fast claims, and expert guidance.'}
          </p>
          {ctaButtons && (
            <div className="hero-buttons">
              <Button to="/contact" variant="primary">
                Get a Quote
              </Button>
              <Button to="/services" variant="outline-light">
                Explore Services
              </Button>
            </div>
          )}
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}family.jfif`}
            alt="Family protected by insurance"
            className="hero-image"
            loading="eager"
          />
          {showFloatingCards &&
            floatingCards.map((card, index) => (
              <motion.div
                key={card.text}
                className={`hero-floating-card card-${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              >
                <card.icon size={22} />
                {card.text}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
