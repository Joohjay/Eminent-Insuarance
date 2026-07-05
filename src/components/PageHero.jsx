import { motion } from 'framer-motion';

function PageHero({ title, subtitle, backgroundImage = '/buildings.jfif' }) {
  return (
    <section className="page-hero" style={{ '--page-hero-bg': `url(${backgroundImage})` }}>
      <div className="container page-hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

export default PageHero;
