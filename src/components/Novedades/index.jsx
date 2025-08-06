import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Novedades.css';
import useEmblaCarousel from 'embla-carousel-react';

import arrowIcon from '../../assets/logos/icon-arrow.png';
import newsIcon from '../../assets/logos/icon-news.png';
import img1 from '../../assets/pictures/nw-1.png';
import img2 from '../../assets/pictures/nw-2.png';
import img3 from '../../assets/pictures/nw-3.png';
import img4 from '../../assets/pictures/nw-4.png';
import img5 from '../../assets/pictures/nw-5.png';
import img6 from '../../assets/pictures/nw-6.png';

const newsItems = [
  { id: 1, image: img1, title: 'EL PLAN DE LA MARIPOSA EN ROCK CONQUISTA 2025', url: 'https://www.instagram.com/rockconquista_/reel/DL_JdjWsKSB/' },
  { id: 2, image: img2, title: 'CRUZANDO EL CHARCO TE INVITA A NUESTRO FESTI', url: 'https://www.instagram.com/rockconquista_/reel/DLqgYPgCGFE/' },
  { id: 3, image: img3, title: 'GUASONES YA ESTÁ EN MODO FESTIVAL', url: 'https://www.instagram.com/rockconquista_/reel/DLTVLstAlJd/' },
  { id: 4, image: img4, title: 'LA MISSISSIPPI LLEGA A ROCK CONQUISTA', url: 'https://www.instagram.com/rockconquista_/reel/DMOjcgVAQqT/' },
  { id: 5, image: img5, title: 'WAYRA IGLESIAS TE INVITA AL ROCK CONQUISTA 2025', url: 'https://www.instagram.com/rockconquista_/reel/DMYzSQrsNcc/' },
  { id: 6, image: img6, title: 'PLANEADOR V TE INVITA A VIVIR LA EXPERIENCIA ROCK CONQUISTA', url: 'https://www.instagram.com/rockconquista_/reel/DMq0653Oovl/' },
];

const Novedades = () => {
  const sectionRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: false,
    speed: 5,
    skipSnaps: false,
    containScroll: 'trimSnaps',
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const autoplayIdRef = useRef(null);
  const resetToStartTimeoutRef = useRef(null);

  const clearAutoplay = () => {
    if (autoplayIdRef.current) {
      clearInterval(autoplayIdRef.current);
      autoplayIdRef.current = null;
    }
  };

  const startAutoplay = () => {
    clearAutoplay();
    if (!emblaApi) return;
    autoplayIdRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 1800);
  };

  const clearResetToStart = () => {
    if (resetToStartTimeoutRef.current) {
      clearTimeout(resetToStartTimeoutRef.current);
      resetToStartTimeoutRef.current = null;
    }
  };

  const scheduleResetToStart = () => {
    clearResetToStart();
    if (!emblaApi) return;
    resetToStartTimeoutRef.current = setTimeout(() => {
      emblaApi.scrollTo(0);
      startAutoplay();
    }, 3000);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const prev = emblaApi.canScrollPrev();
    const next = emblaApi.canScrollNext();
    setCanPrev(prev);
    setCanNext(next);
    if (!next) {
      scheduleResetToStart();
    } else {
      clearResetToStart();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    const pauseOnPointerDown = () => {
      clearAutoplay();
      clearResetToStart();
    };
    emblaApi.on('pointerDown', pauseOnPointerDown);
    const resumeOnSettle = () => {
      onSelect();
      startAutoplay();
    };
    emblaApi.on('settle', resumeOnSettle);
    startAutoplay();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('pointerDown', pauseOnPointerDown);
      emblaApi.off('settle', resumeOnSettle);
      clearAutoplay();
      clearResetToStart();
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShowAnimation(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="news" id="novedades" ref={sectionRef}>
      <div className={`news__content ${showAnimation ? 'animate' : ''}`}>
        <h2 className="news__title">
          <img className="news_icon" src={newsIcon} alt="icono últimas novedades" />
          NOVEDADES
        </h2>

        <div className="news__carousel-container">
          <button
            type="button"
            className={`news__nav news__nav--left ${canPrev ? '' : 'is-disabled'}`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canPrev}
            aria-label="Anterior"
          >
            <img src={arrowIcon} alt="" />
          </button>

          <div className="news__carousel" ref={emblaRef}>
            <div className="news__track">
              {newsItems.map(({ id, image, title, url }) => (
                <div className="news__slide" key={id}>
                  <button
                    type="button"
                    className="news__item"
                    onClick={() => window.open(url, '_blank')}
                  >
                    <img src={image} alt={title} className="news__img" />
                    <div className="news__overlay">
                      <p className="news__text">{title}</p>
                    </div>
                    <img src={arrowIcon} alt="ver más" className="news__corner-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`news__nav news__nav--right ${canNext ? '' : 'is-disabled'}`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canNext}
            aria-label="Siguiente"
          >
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Novedades;
