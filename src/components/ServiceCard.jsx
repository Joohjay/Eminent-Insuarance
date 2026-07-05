import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="service-icon">
        {Icon && <Icon size={28} />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-link">
        Learn More <ArrowRight size={16} />
      </span>
    </motion.div>
  );
}

export default ServiceCard;
