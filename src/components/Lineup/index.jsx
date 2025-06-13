import React, { useEffect, useRef, useState } from 'react';
import './Lineup.css';
import lineupTitle from '../../assets/logos/line-up-logo.png';
import ArtistModal from '../ArtistModal/index';

const Lineup = () => {
  const titleRef = useRef(null);
  const bandsRef = useRef([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleBands, setVisibleBands] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null); // NUEVO

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

  const handleOpenModal = (artistName) => {
    setSelectedArtist(artistName);
  };

  const handleCloseModal = () => {
    setSelectedArtist(null);
  };

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
            <button
              key={i}
              ref={el => (bandsRef.current[i] = el)}
              onClick={() => handleOpenModal(band.replace(/✦/g, ''))}
              className={`lineup__band ${visibleBands.includes(i) ? 'band-in' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {band}
            </button>
          ))}
        </div>
        <div className="lineup__tier lineup__tier--two">
          {['✦LA MISSISSIPPI✦', '✦PLANEADOR V✦', '✦WAYRA IGLESIAS✦'].map((band, i) => {
            const index = i + 3;
            return (
              <button
                key={index}
                ref={el => (bandsRef.current[index] = el)}
                onClick={() => handleOpenModal(band.replace(/✦/g, ''))}
                className={`lineup__band ${visibleBands.includes(index) ? 'band-in' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {band}
              </button>
            );
          })}
        </div>
        <div className="lineup__tier lineup__tier--three">
          {['✦DANIELA MILAGROS✦', '✦ENIGMÁTICOS✦', '✦EXIMIOS✦'].map((band, i) => {
            const index = i + 6;
            return (
              <button
                key={index}
                ref={el => (bandsRef.current[index] = el)}
                onClick={() => handleOpenModal(band.replace(/✦/g, ''))}
                className={`lineup__band ${visibleBands.includes(index) ? 'band-in' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {band}
              </button>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {selectedArtist && (
        <ArtistModal artistName={selectedArtist} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Lineup;