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
import sponsor26 from '../../assets/logos/sponsor26.png';
import sponsor12 from '../../assets/logos/sponsor12.svg';
import sponsor13 from '../../assets/logos/sponsor13.svg';
import sponsor14 from '../../assets/logos/sponsor14.png';
import sponsor15 from '../../assets/logos/sponsor15.png';
import sponsor16 from '../../assets/logos/sponsor16.png';
import sponsor17 from '../../assets/logos/sponsor17.png';
import sponsor18 from '../../assets/logos/sponsor18.png';
import sponsor19 from '../../assets/logos/sponsor19.png';
import sponsor20 from '../../assets/logos/sponsor20.png';
import sponsor21 from '../../assets/logos/sponsor21.png';
import sponsor22 from '../../assets/logos/sponsor22.png';
import sponsor23 from '../../assets/logos/sponsor23.png';
import sponsor24 from '../../assets/logos/sponsor24.png';
import sponsor25 from '../../assets/logos/sponsor25.png';
import sponsor27 from '../../assets/logos/sponsor27.png';
import sponsor28 from '../../assets/logos/sponsor28.png';
import sponsor29 from '../../assets/logos/sponsor29.png';
import sponsor30 from '../../assets/logos/sponsor30.png';
import sponsor31 from '../../assets/logos/sponsor31.png';
import sponsor32 from '../../assets/logos/sponsor32.png';
import sponsor33 from '../../assets/logos/sponsor33.png';
import sponsor34 from '../../assets/logos/sponsor34.png';
import sponsor35 from '../../assets/logos/sponsor35.png';
import sponsor36 from '../../assets/logos/sponsor36.png';
import sponsor37 from '../../assets/logos/sponsor37.png';
import sponsor38 from '../../assets/logos/sponsor38.png';

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
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
    sponsor16,
    sponsor7,
    sponsor8,
    sponsor9,
    sponsor10,
    sponsor17,
    sponsor18,
    sponsor19,
    sponsor26,
    sponsor13,
    sponsor20,
    sponsor21,
    sponsor27,
    sponsor28,
    sponsor29,
    sponsor30,
    sponsor31,
    sponsor32,
    sponsor33,
    sponsor34,
    sponsor35,
    sponsor36,
    sponsor37,
    sponsor38,
    sponsor22,
    sponsor23,
    sponsor12,
    sponsor24,
    sponsor25,
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
          <div className="footer__destacados">
            <div className="footer__destacado footer__destacado--left">
              <img src={sponsor1} alt="Sponsor principal 1" />
            </div>
            <div className="footer__destacado-separator"></div>
            <div className="footer__destacado footer__destacado--right">
              <img src={sponsor14} alt="Sponsor principal 2" />
              <img src={sponsor15} alt="Sponsor principal 3" />
            </div>
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
              const isWide = i === 6;
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
            <div
              className="footer__sponsor-divider"
              aria-hidden="true"
              title="Separador de sponsors"
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
