import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollPosition } from '../hooks/useScrollPosition';
import Button from './Button';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { scrollPosition } = useScrollPosition();
  const isScrolled = scrollPosition.y > 50;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="container navbar-inner" aria-label="Main navigation">
          <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <img src={`${import.meta.env.BASE_URL}logo.PNG`} alt="" />
            <span>
              <strong>Eminent</strong> Insurance
            </span>
          </NavLink>

          <ul className="navbar-links" role="menubar">
            {navItems.map((item) => (
              <li key={item.path} role="none">
                <NavLink to={item.path} role="menuitem" end={item.path === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <div className="navbar-cta">
              <Button to="/contact" variant="primary">
                Get Quote
              </Button>
            </div>
            <button
              type="button"
              id="hamburger"
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="nav-links"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="nav-links"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            end={item.path === '/'}
          >
            {item.label}
          </NavLink>
        ))}
        <Button to="/contact" variant="primary" style={{ marginTop: '16px' }}>
          Get Quote
        </Button>
      </div>
    </>
  );
}

export default Navbar;
