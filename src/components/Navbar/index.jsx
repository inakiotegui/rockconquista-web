import { useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'Inicio', targetId: 'hero' },
  { label: 'Line Up', targetId: 'lineup' },
  { label: 'Entradas', targetId: 'tickets' },
  { label: 'Novedades', targetId: 'novedades' },
  { label: 'Tienda', targetId: 'novedades' },
  { label: 'Contacto', targetId: null }
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleContactClick = () => {
  const today = new Date();
  const date = today.toLocaleDateString('es-AR');
  const subject = encodeURIComponent(`Consulta desde la web RockConquista - ${date}`);
  const mailto = `mailto:rockconquista@u51nagroup.com?subject=${subject}`;
  window.open(mailto, '_blank');
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
                if (label === 'Contacto') {
                  handleContactClick();
                } else {
                  scrollToSection(targetId);
                }
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