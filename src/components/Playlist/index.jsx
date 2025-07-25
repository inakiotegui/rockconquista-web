import React, { useEffect, useRef, useState } from 'react';
import { FaSpotify } from 'react-icons/fa';
import './Playlist.css';

const Playlist = () => {
  const contentRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      window.open('https://open.spotify.com/playlist/3fpUeFSsOkDMck2vNhZ9F9?si=35f9b87367304fbd', '_blank');
      setClicked(false);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
    <section className="playlist" id="playlist">
      <div
        ref={contentRef}
        className={`playlist__content ${showAnimation ? 'animate' : ''}`}
      >
        <h2 className="playlist__title">
          ESCUCHÁ NUESTRA
          <br />
          <span className="playlist__highlight">PLAYLIST OFICIAL</span>
          <br />
          EN SPOTIFY!
        </h2>
        <button
          className={`playlist__button ${clicked ? 'clicked' : ''}`}
          onClick={handleClick}
        >
          <span className="playlist__icon">
            <FaSpotify />
          </span>
          <span className="playlist__text">
            YA PODÉS MANIJEARTE COMO SE DEBE
          </span>
        </button>
      </div>
    </section>
  );
};

export default Playlist;
