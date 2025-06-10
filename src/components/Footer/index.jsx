import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';
import { usePopup } from '../../context/PopupContext';

import logoEvento from '../../assets/logos/logo1.png';
import logoProductor from '../../assets/logos/logo-productor.png';
import sponsor1 from '../../assets/logos/sponsor1.png';
import sponsor2 from '../../assets/logos/sponsor2.png';
import sponsor3 from '../../assets/logos/sponsor3.png';
import sponsor4 from '../../assets/logos/sponsor4.png';

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { openPopup } = usePopup();

  const handleOpenPopup = () => {
    openPopup();
  };

  const links = [
    { label: 'Inicio', targetId: 'hero' },
    { label: 'Line Up', targetId: 'lineup' },
    { label: 'Entradas', targetId: 'tickets' },
    { label: 'Novedades', targetId: 'novedades' },
    { label: 'Tienda', targetId: 'novedades' }, // asumimos que también va a novedades
    { label: 'Contacto', targetId: 'popup' } // este es especial
  ];

  return (
    <footer className="footer">
      <div className="footer__col footer__col--links">
        {links.map(({ label, targetId }) => (
          <button
            key={label}
            onClick={() =>
              label === 'Contacto'
                ? handleOpenPopup()
                : scrollToSection(targetId)
            }
            className="footer__link"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="footer__col footer__col--center">
        <img src={logoEvento} alt="Logo Evento" className="footer__logo-evento" />
        <p className="footer__frase">LA MÚSICA COMO BANDERA</p>
        <p className="footer__producido">PRODUCIDO POR</p>
        <img src={logoProductor} alt="Logo Productor" className="footer__logo-productor" />
        <div className="footer__sponsors">
          {[sponsor1, sponsor2, sponsor3, sponsor4].map((src, i) => (
            <img key={i} src={src} alt={`Sponsor ${i + 1}`} className="footer__sponsor" />
          ))}
        </div>
      </div>

      <div className="footer__col footer__col--redes">
        {[
          {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/rockconquista_'
          },
          {
            name: 'TikTok',
            icon: <FaTiktok />,
            url: 'https://www.tiktok.com/@rockconquista_'
          },
          {
            name: 'Facebook',
            icon: <FaFacebookF />,
            url: 'https://www.facebook.com/rockconquista/'
          },
          {
            name: 'YouTube',
            icon: <FaYoutube />,
            url: 'https://youtube.com/@rockconquista?si=4QgjkYgeKt6IM_j0&sub_confirmation=1'
          }
        ].map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__red"
          >
            <span className="footer__icon">{icon}</span>
            {name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;