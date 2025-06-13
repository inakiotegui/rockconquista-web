import React, { useEffect, useRef } from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';

import logoEvento from '../../assets/logos/logo1.png';
import logoProductor from '../../assets/logos/logo-productor.png';
import sponsor1 from '../../assets/logos/sponsor3.png';
import sponsor2 from '../../assets/logos/sponsor2.png';
import sponsor3 from '../../assets/logos/sponsor5.png';
import sponsor4 from '../../assets/logos/sponsor4.png';
import sponsor5 from '../../assets/logos/sponsor7.png';
import sponsor6 from '../../assets/logos/sponsor6.png';
import sponsor7 from '../../assets/logos/sponsor1.png';

const Footer = () => {
  const centerRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Inicio', targetId: 'hero' },
    { label: 'Line Up', targetId: 'lineup' },
    { label: 'Entradas', targetId: 'tickets' },
    { label: 'Novedades', targetId: 'novedades' },
    { label: 'Tienda', targetId: 'novedades' },
    { label: 'Contacto', targetId: null }
  ];

  const handleContactClick = () => {
    const today = new Date();
    const date = today.toLocaleDateString('es-AR');
    const subject = encodeURIComponent(`Consulta desde la web RockConquista - ${date}`);
    const mailto = `mailto:rockconquista@u51nagroup.com?subject=${subject}`;
    window.open(mailto, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('visible');

            if (el.classList.contains('footer__col--center')) {
              const grupo1 = el.querySelector('.footer__grupo-1');
              const grupo2 = el.querySelector('.footer__grupo-2');
              const sponsors = el.querySelector('.footer__sponsors');

              setTimeout(() => grupo1.classList.add('visible'), 100);
              setTimeout(() => grupo2.classList.add('visible'), 400);
              setTimeout(() => sponsors.classList.add('visible'), 700);
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll('.footer__col--links, .footer__col--center, .footer__col--redes')
      .forEach(el => {
        el.classList.add('animate-from-bottom');
        observer.observe(el);
      });

    ['.footer__grupo-1', '.footer__grupo-2', '.footer__sponsors'].forEach(sel => {
      const el = centerRef.current?.querySelector(sel);
      if (el) el.classList.add('animate-from-bottom');
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__col footer__col--links">
        {links.map(({ label, targetId }) => (
          <button
            key={label}
            onClick={() =>
              label === 'Contacto' ? handleContactClick() : scrollToSection(targetId)
            }
            className="footer__link"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="footer__col footer__col--center" ref={centerRef}>
        <div className="footer__grupo-1">
          <img src={logoEvento} alt="Logo Evento" className="footer__logo-evento" />
          <p className="footer__frase">LA MÚSICA COMO BANDERA</p>
        </div>

        <div className="footer__grupo-2">
          <p className="footer__producido">PRODUCIDO POR</p>
          <img src={logoProductor} alt="Logo Productor" className="footer__logo-productor" />
        </div>

        <div className="footer__sponsors">
          {[sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7].map((src, i) => (
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