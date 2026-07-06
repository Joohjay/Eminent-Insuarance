import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, details = [], delay = 0, isOpen = false, onToggle, learnMoreTo }) {
  const detailsId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-details`;

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
      {learnMoreTo ? (
        <Link className="service-link" to={learnMoreTo}>
          Learn More <ArrowRight size={16} />
        </Link>
      ) : (
        <button
          type="button"
          className="service-link"
          aria-expanded={isOpen}
          aria-controls={detailsId}
          onClick={onToggle}
        >
          {isOpen ? 'Show Less' : 'Learn More'} <ArrowRight size={16} />
        </button>
      )}

      {isOpen && (
        <div className="service-details" id={detailsId}>
          <h4>What this cover can include</h4>
          <ul>
            {details.map((detail) => (
              <li key={detail}>
                <CheckCircle2 size={16} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <Link className="service-details-cta" to={`/contact?service=${encodeURIComponent(title)}`}>
            Request a Quote <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default ServiceCard;
