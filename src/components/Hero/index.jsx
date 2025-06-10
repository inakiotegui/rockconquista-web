import { useEffect, useState } from 'react';
import './Hero.css';

import fondoBase from '../../assets/pictures/hero1.png';
import logo from '../../assets/logos/logo1.png';
import recorteFront from '../../assets/pictures/hero2.png';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  const [showMap, setShowMap] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Disparar las animaciones solo la primera vez
    setHasAnimated(true);
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero__background">
          <img
            src={fondoBase}
            alt="fondo base"
            className={`layer fondo `}
          />
          <img
            src={logo}
            alt="logo festival"
            className={`layer logo ${hasAnimated ? 'animate-logo-zoom' : ''}`}
          />
          <img
            src={recorteFront}
            alt="recorte frente"
            className={`layer recorte `}
          />
        </div>

        <div className={`hero__content ${hasAnimated ? 'animate-fade-in-delay' : ''}`}>
          <div className="hero__buttons">
            <div className="btn-wrapper">
              <button
                className="btn btn--lineup"
                onClick={() => scrollToSection('lineup')}
              >
                LINE UP
              </button>
            </div>
            <div className="btn-wrapper">
              <button className="btn btn--maps" onClick={() => setShowMap(true)}>
                CÓMO LLEGAR
              </button>
            </div>
          </div>
          <h1 className="hero__date">SÁBADO 13 DE SEPTIEMBRE</h1>
          <p className="hero__place">SOCIEDAD RURAL DE RECONQUISTA</p>
        </div>
      </section>

      {showMap && (
        <div className="map-modal">
          <div className="map-modal__overlay" onClick={() => setShowMap(false)} />
          <div className="map-modal__content">
            <button className="map-modal__close" onClick={() => setShowMap(false)}>
              ✕
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9996482584726!2d-59.65116242476799!3d-29.14016087537885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a8fba480ff0f%3A0x94160c2b61a605a7!2sSociedad%20Rural%20de%20Reconquista!5e0!3m2!1ses-419!2sar!4v1718026227384!5m2!1ses-419!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sociedad Rural de Reconquista"
            />
          </div>
        </div>
      )}
    </>
  );
}