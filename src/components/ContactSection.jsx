import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

const whatsappNumber = '255781585781';
const contactEmail = 'eminentinsurance@hotmail.com';

const contactCards = [
  { icon: Phone, title: 'Phone', details: ['+255 781 585 781', '+255 717 207 931'] },
  { icon: Mail, title: 'Email', details: [contactEmail] },
  { icon: MapPin, title: 'Office', details: ['Dar es Salaam, Tanzania'] },
  { icon: Clock, title: 'Business Hours', details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'] },
];

function buildContactMessage({ name, email, phone, service, message }) {
  return [
    'New insurance quote request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Insurance Type: ${service || 'Not specified'}`,
    '',
    'Message:',
    message,
  ].join('\n');
}

function ContactSection({ showHeading = true }) {
  const [searchParams] = useSearchParams();
  const [submitMessage, setSubmitMessage] = useState('');
  const selectedService = searchParams.get('service') || '';

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      service: formData.get('service')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
    };
    const contactMessage = buildContactMessage(formValues);
    const subject = `Insurance Quote Request - ${formValues.service || formValues.name}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`;
    const emailUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(contactMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.location.href = emailUrl;
    setSubmitMessage('Your WhatsApp message and email draft are opening now.');
  };

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
              onSubmit={handleSubmit}
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
                  defaultValue={selectedService}
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
              {submitMessage && (
                <p className="form-submit-note" role="status">
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
