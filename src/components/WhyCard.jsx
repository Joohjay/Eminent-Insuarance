import { motion } from 'framer-motion';

function WhyCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="why-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="why-icon">
        {Icon && <Icon size={26} />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default WhyCard;
