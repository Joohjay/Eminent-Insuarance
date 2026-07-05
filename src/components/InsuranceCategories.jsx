import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const categories = [
  { title: 'Personal Insurance', description: 'Health, motor, life, travel, and home covers designed for you and your family.', image: '/family.jfif' },
  { title: 'Business Insurance', description: 'Asset, liability, and employee benefit solutions for companies of all sizes.', image: '/buildings.jfif' },
  { title: 'Specialized Insurance', description: 'Marine, engineering, agriculture, and professional indemnity covers.', image: '/NYC.jfif' },
];

function InsuranceCategories() {
  return (
    <section className="section section-gradient">
      <div className="container">
        <SectionHeading
          label="Insurance Categories"
          title="Protection for Every Aspect of Life"
          subtitle="Whether you are an individual, SME, or large corporation, we have the right coverage for you."
          light
        />
        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={`${import.meta.env.BASE_URL}${category.image}`} alt={category.title} loading="lazy" />
              <div className="category-overlay" />
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsuranceCategories;
