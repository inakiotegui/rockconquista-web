import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const contentRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowAnimation(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about">
      <div
        ref={contentRef}
        className={`about__content ${showAnimation ? 'animate' : ''}`}
      >
        <h2 className="about__title">¿QUÉ ES<br />ROCK CONQUISTA?</h2>
        <p className="about__paragraph">
          ESTE ES UN FESTIVAL DÓNDE LAS INDUSTRIAS LOCALES ESTÁN CONVOCADAS A TOMAR EL ESCENARIO CON UN ENFOQUE CLARO PARA IMPULSAR LAS ECONOMÍAS REGIONALES.<br /><br />
          CONECTANDO LAS EMPRESAS Y LAS INDUSTRIAS DE LA ZONA CON EL PÚBLICO A TRAVÉS DE ACTIVACIONES DE MARCA DENTRO DEL FESTIVAL.<br /><br />
          LA GASTRONOMÍA LOCAL SE HACE PROTAGONISTA CON UNA VARIADA PROPUESTA QUE INCLUYE LOS MEJORES SABORES DEL LITORAL DESDE PARRILLAS Y COMIDAS TÍPICAS HASTA PROPUESTAS INNOVADORAS E INCLUSIVAS, QUE TENGAN UN SELLO LOCAL E INTERNACIONAL.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;