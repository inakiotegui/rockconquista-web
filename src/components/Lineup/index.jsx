import React, { useEffect, useRef, useState } from 'react';
import './Lineup.css';
import lineupTitle from '../../assets/logos/line-up-logo.png';

const Lineup = () => {
  const titleRef = useRef(null);
  const bandsRef = useRef([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleBands, setVisibleBands] = useState([]);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => titleObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bandsRef.current.forEach((_, index) => {
            setTimeout(() => {
              setVisibleBands(prev => [...prev, index]);
            }, index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (bandsRef.current[0]) {
      observer.observe(bandsRef.current[0]);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="lineup" id="lineup">
      <img
        ref={titleRef}
        src={lineupTitle}
        alt="Lineup"
        className={`lineup__title ${titleVisible ? 'animate' : ''}`}
      />
      <div className="lineup__tiers">
        <div className="lineup__tier lineup__tier--one">
          {['✦GUASONES✦', '✦CRUZANDO EL CHARCO✦', '✦EL PLAN DE LA MARIPOSA✦'].map((band, i) => (
            <div
              key={i}
              ref={el => (bandsRef.current[i] = el)}
              className={`lineup__band ${visibleBands.includes(i) ? 'band-in' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {band}
            </div>
          ))}
        </div>
        <div className="lineup__tier lineup__tier--two">
          {['✦LA MISSISSIPPI✦', '✦PLANEADOR V✦', '✦WAYRA IGLESIAS✦'].map((band, i) => {
            const index = i + 3;
            return (
              <div
                key={index}
                ref={el => (bandsRef.current[index] = el)}
                className={`lineup__band ${visibleBands.includes(index) ? 'band-in' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {band}
              </div>
            );
          })}
        </div>
        <div className="lineup__tier lineup__tier--three">
          {['✦DANIELA MILAGROS✦', '✦ENIGMÁTICOS✦', '✦EXIMIOS✦'].map((band, i) => {
            const index = i + 6;
            return (
              <div
                key={index}
                ref={el => (bandsRef.current[index] = el)}
                className={`lineup__band ${visibleBands.includes(index) ? 'band-in' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {band}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lineup;