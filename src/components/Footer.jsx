import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Motor Insurance',
    'Health Insurance',
    'Life Insurance',
    'Business Insurance',
    'Travel Insurance',
    'Agriculture Insurance',
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <NavLink to="/" className="navbar-logo">
              <img src={`${import.meta.env.BASE_URL}logo.PNG`} alt="" />
              <span>
                <strong>Eminent</strong> Insurance
              </span>
            </NavLink>
            <p>
              Eminent Insurance Solutions provides reliable, customer-focused insurance
              products in Tanzania. We protect what matters most to you and your business.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={16} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} onClick={handleFooterLinkClick}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <NavLink to="/services">{service}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for insurance tips and updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
              <button type="submit" aria-label="Subscribe">
                <Send size={18} />
              </button>
            </form>
            <div style={{ marginTop: '24px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Phone size={16} /> +255 781 585 781
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Mail size={16} /> eminentinsurance@hotmail.com
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} /> Dar es Salaam, Tanzania
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Eminent Insurance Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
