import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const steps = [
  { step: 1, title: 'Consultation', description: 'Discuss your needs with our insurance advisors.' },
  { step: 2, title: 'Needs Assessment', description: 'We analyze your risks and coverage requirements.' },
  { step: 3, title: 'Policy Recommendation', description: 'Receive tailored options from trusted insurers.' },
  { step: 4, title: 'Coverage Activation', description: 'We finalize documentation and activate your policy.' },
  { step: 5, title: 'Claims Support', description: 'Our team assists you throughout the claims journey.' },
];

function HowItWorks() {
  return (
    <section className="section section-gradient">
      <div className="container">
        <SectionHeading
          label="How It Works"
          title="Simple Steps to Secure Your Future"
          subtitle="Getting insured with Eminent Insurance Solutions is straightforward and hassle-free."
          light
        />
        <div className="steps-wrapper">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
