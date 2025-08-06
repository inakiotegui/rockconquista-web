import React, { useEffect, useRef, useCallback } from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';

import logoEvento from '../../assets/logos/logo1.png';
import logoProductor from '../../assets/logos/logo-productor.png';
import sponsor1 from '../../assets/logos/sponsor1.svg';
import sponsor2 from '../../assets/logos/sponsor2.svg';
import sponsor3 from '../../assets/logos/sponsor3.svg';
import sponsor4 from '../../assets/logos/sponsor4.svg';
import sponsor5 from '../../assets/logos/sponsor5.svg';
import sponsor6 from '../../assets/logos/sponsor6.svg';
import sponsor7 from '../../assets/logos/sponsor7.svg';
import sponsor8 from '../../assets/logos/sponsor8.svg';
import sponsor9 from '../../assets/logos/sponsor9.svg';
import sponsor10 from '../../assets/logos/sponsor10.svg';
import sponsor11 from '../../assets/logos/sponsor11.svg';
import sponsor12 from '../../assets/logos/sponsor12.svg';
import sponsor13 from '../../assets/logos/sponsor13.svg';

const Footer = () => {
  const centerRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
    speed: 4,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 1800);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const today = new Date();
    const date = today.toLocaleDateString('es-AR');
    const subject = encodeURIComponent(
      `Consulta desde la web RockConquista - ${date}`
    );
    const mailto = `mailto:rockconquista@u51nagroup.com?subject=${subject}`;
    window.open(mailto, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('visible');

            if (el.classList.contains('footer__col--center')) {
              const grupo1 = el.querySelector('.footer__grupo-1');
              const grupo2 = el.querySelector('.footer__grupo-2');

              setTimeout(() => grupo1.classList.add('visible'), 100);
              setTimeout(() => grupo2.classList.add('visible'), 400);
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(
        '.footer__col--links, .footer__col--center, .footer__col--redes'
      )
      .forEach((el) => {
        el.classList.add('animate-from-bottom');
        observer.observe(el);
      });

    ['.footer__grupo-1', '.footer__grupo-2'].forEach((sel) => {
      const el = centerRef.current?.querySelector(sel);
      if (el) el.classList.add('animate-from-bottom');
    });
  }, []);

  const links = [
    { label: 'Inicio', targetId: 'hero' },
    { label: 'Line Up', targetId: 'lineup' },
    { label: 'Entradas', targetId: 'tickets' },
    { label: 'Novedades', targetId: 'novedades' },
    { label: 'Newsletter', targetId: 'newsletter' },
    { label: 'Tienda', targetId: 'tienda' },
    { label: 'Playlist', targetId: 'playlist' },
    { label: 'Contacto', targetId: null },
  ];

  const sponsors = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
    sponsor7,
    sponsor8,
    sponsor9,
    sponsor10,
    sponsor11,
    sponsor12,
    sponsor13,
  ];

  const primarySponsors = sponsors.slice(0, 8);
  const secondarySponsors = sponsors.slice(8);

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col footer__col--links">
          {links.map(({ label, targetId }) => (
            <button
              key={label}
              onClick={() =>
                label === 'Contacto'
                  ? handleContactClick()
                  : scrollToSection(targetId)
              }
              className="footer__link"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="footer__col footer__col--center" ref={centerRef}>
          <div className="footer__grupo-1">
            <img
              src={logoEvento}
              alt="Logo Evento"
              className="footer__logo-evento"
            />
            <p className="footer__frase">LA MÚSICA COMO BANDERA</p>
          </div>

          <div className="footer__grupo-2">
            <p className="footer__producido">PRODUCIDO POR</p>
            <img
              src={logoProductor}
              alt="Logo Productor"
              className="footer__logo-productor"
            />
          </div>
        </div>

        <div className="footer__col footer__col--redes">
          {[
            {
              name: 'Instagram',
              icon: <FaInstagram />,
              url: 'https://www.instagram.com/rockconquista_',
            },
            {
              name: 'TikTok',
              icon: <FaTiktok />,
              url: 'https://www.tiktok.com/@rockconquista_',
            },
            {
              name: 'Facebook',
              icon: <FaFacebookF />,
              url: 'https://www.facebook.com/rockconquista/',
            },
            {
              name: 'YouTube',
              icon: <FaYoutube />,
              url: 'https://youtube.com/@rockconquista?sub_confirmation=1',
            },
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
      </div>

      <div className="footer__bottom">
        <div className="footer__sponsor-carousel" ref={emblaRef}>
          <div className="footer__sponsor-container">
            {primarySponsors.map((src, i) => (
              <div className="footer__sponsor-slide" key={`p-${i}`}>
                <img
                  src={src}
                  alt={`Sponsor ${i + 1}`}
                  className="footer__sponsor"
                />
              </div>
            ))}
            <div
              className="footer__sponsor-divider"
              aria-hidden="true"
              title="Separador de sponsors"
            ></div>
            {secondarySponsors.map((src, i) => {
              const isWide = i === secondarySponsors.length - 1;
              return (
                <div className="footer__sponsor-slide" key={`s-${i}`}>
                  <img
                    src={src}
                    alt={`Sponsor ${8 + i + 1}`}
                    className={`footer__sponsor footer__sponsor--secondary ${
                      isWide ? 'footer__sponsor--wide' : ''
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
