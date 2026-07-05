import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'John Mwakasege',
    role: 'Business Owner',
    quote: 'Eminent Insurance made the entire process simple. Their team helped us find the right business cover, and the claims support was outstanding.',
    rating: 5,
  },
  {
    name: 'Amina Hassan',
    role: 'Healthcare Professional',
    quote: 'I got comprehensive health insurance for my family at an affordable premium. The customer service team is always responsive.',
    rating: 5,
  },
  {
    name: 'Michael Ochieng',
    role: 'Logistics Manager',
    quote: 'Their marine insurance solution gave us peace of mind for international shipments. Professional and reliable partner.',
    rating: 5,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from individuals and businesses who trust Eminent Insurance Solutions."
        />
        <div className="testimonials-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: 'var(--gold)' }}>
                <Quote size={32} />
              </div>
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-nav">
            <button type="button" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === current ? 'active' : ''}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
