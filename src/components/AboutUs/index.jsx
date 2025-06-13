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
          Un festival que va más allá de la música.<br /><br />
          Un encuentro de cultura rock, en la forma más pura y vibrante. Una propuesta totalmente inmersiva orientada a toda la familia.<br /><br />
          Rock Conquista es la fusión perfecta entre música, cultura, gastronomía y experiencias múltiples.<br /><br />
          ¡Sean todos bienvenidos al Rock Conquista!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;