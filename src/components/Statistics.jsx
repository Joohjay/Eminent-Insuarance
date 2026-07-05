import { motion } from 'framer-motion';
import { Briefcase, Users, FileCheck, Headphones } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { icon: Briefcase, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 500, suffix: '+', label: 'Satisfied Clients' },
  { icon: FileCheck, value: 500, suffix: '+', label: 'Claims Processed' },
  { icon: Headphones, value: 24, suffix: '/7', label: 'Customer Support' },
];

function Statistics() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          label="Our Impact"
          title="Numbers That Speak Trust"
          subtitle="We have built a reputation for reliability and customer satisfaction across Tanzania."
        />
        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="stat-icon">
                <stat.icon size={26} />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Statistics;
