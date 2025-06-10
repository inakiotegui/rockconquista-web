import { useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'Inicio', targetId: 'hero' },
  { label: 'Line Up', targetId: 'lineup' },
  { label: 'Entradas', targetId: 'tickets' },
  { label: 'Novedades', targetId: 'novedades' },
  { label: 'Tienda', targetId: 'novedades' },
  { label: 'Contacto', targetId: 'contacto' }
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <button className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <button className="navbar__close" onClick={closeMenu}>✕</button>
        <div className="navbar__links">
          {links.map(({ label, targetId }) => (
            <button
              key={label}
              className="navbar__link"
              onClick={() => {
                scrollToSection(targetId);
                closeMenu();
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;