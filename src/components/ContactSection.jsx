import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

const contactCards = [
  { icon: Phone, title: 'Phone', details: ['+255 781 585 781', '+255 717 207 931'] },
  { icon: Mail, title: 'Email', details: ['eminentinsurance@hotmail.com'] },
  { icon: MapPin, title: 'Office', details: ['Dar es Salaam, Tanzania'] },
  { icon: Clock, title: 'Business Hours', details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'] },
];

function ContactSection({ showHeading = true }) {
  return (
    <section className="section section-alt">
      <div className="container">
        {showHeading && (
          <SectionHeading
            label="Get In Touch"
            title="Contact Our Team"
            subtitle="Have questions or need a quote? Reach out and we will get back to you as soon as possible."
          />
        )}
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-cards">
              {contactCards.map((card) => (
                <div key={card.title} className="contact-card">
                  <div className="contact-card-icon">
                    <card.icon size={22} />
                  </div>
                  <h3>{card.title}</h3>
                  {card.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              ))}
            </div>
            <div className="map-placeholder">
              <MapPin size={32} />
              <span>Google Maps Integration Placeholder</span>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>Send Us a Message</h3>
            <form
              action="https://formspree.io/f/mwpgzrgr"
              method="POST"
              className="contact-form"
              aria-label="Contact form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required autoComplete="email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+255 XXX XXX XXX" autoComplete="tel" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Insurance Type</label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  placeholder="e.g. Motor, Health, Business"
                  list="service-options"
                />
                <datalist id="service-options">
                  <option value="Motor Insurance" />
                  <option value="Health Insurance" />
                  <option value="Life Insurance" />
                  <option value="Business Insurance" />
                  <option value="Travel Insurance" />
                  <option value="Other" />
                </datalist>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your insurance needs..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
