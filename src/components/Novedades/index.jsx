import React, { useRef, useState, useEffect } from 'react';
import './Novedades.css';

import arrowIcon from '../../assets/logos/icon-arrow.png';
import newsIcon from '../../assets/logos/icon-news.png';
import img1 from '../../assets/pictures/nw-1.png';
import img2 from '../../assets/pictures/nw-2.png';
import img3 from '../../assets/pictures/nw-3.png';
import img4 from '../../assets/pictures/nw-4.png';

const newsItems = [
  {
    id: 1,
    image: img1,
    title: 'EL PLAN DE LA MARIPOSA EN ROCK CONQUISTA 2025',
    url: 'https://www.instagram.com/rockconquista_/reel/DL_JdjWsKSB/',
  },
  {
    id: 2,
    image: img2,
    title: 'CRUZANDO EL CHARCO TE INVITA A NUESTRO FESTI',
    url: 'https://www.instagram.com/rockconquista_/reel/DLqgYPgCGFE/',
  },
  {
    id: 3,
    image: img3,
    title: 'GUASONES YA ESTÁ EN MODO FESTIVAL',
    url: 'https://www.instagram.com/rockconquista_/reel/DLTVLstAlJd/',
  },
  {
    id: 4,
    image: img4,
    title: 'LA MISSISSIPPI LLEGA A ROCK CONQUISTA',
    url: 'https://www.instagram.com/rockconquista_/reel/DMOjcgVAQqT/',
  },
];

const Novedades = () => {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    checkScroll();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
    };
  }, []);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="news" id="novedades" ref={sectionRef}>
      <div className={`news__content ${showAnimation ? 'animate' : ''}`}>
        <h2 className="news__title">
          <img className="news_icon" src={newsIcon} alt="icono últimas novedades" />
          NOVEDADES
        </h2>

        <div className="news__carousel-container">
          {canScrollLeft && (
            <button className="news__nav news__nav--left" onClick={() => scroll('left')}>
              <img src={arrowIcon} alt="←" />
            </button>
          )}

          <div className="news__carousel" ref={carouselRef}>
            {newsItems.map(({ id, image, title, url }) => (
              <button
                key={id}
                className="news__item"
                onClick={() => window.open(url, '_blank')}
              >
                <img src={image} alt={title} className="news__img" />
                <div className="news__overlay">
                  <p className="news__text">{title}</p>
                </div>
                <img src={arrowIcon} alt="ver más" className="news__corner-icon" />
              </button>
            ))}
          </div>

          {canScrollRight && (
            <button className="news__nav news__nav--right" onClick={() => scroll('right')}>
              <img src={arrowIcon} alt="→" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Novedades;
