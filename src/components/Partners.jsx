import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const partners = [
  { name: 'CRDB Insurance', logo: 'crdb-seeklogo.png' },
  { name: 'Jubilee Insurance', logo: null },
  { name: 'NIC Insurance', logo: null },
  { name: 'Alliance Insurance', logo: null },
  { name: 'Heritage Insurance', logo: null },
];

function Partners() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Our Partners"
          title="Trusted by Leading Insurers"
          subtitle="We partner with reputable insurance institutions to bring you secure and reliable coverage."
        />
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="partner-logo-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {partner.logo ? (
                <img
                  src={`${import.meta.env.BASE_URL}${partner.logo}`}
                  alt={partner.name}
                  loading="lazy"
                />
              ) : (
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{partner.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
