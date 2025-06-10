import React, { useState , useEffect, useRef } from 'react';
import './Bandera.css';

import { FaSmileBeam, FaTimes } from 'react-icons/fa';

import icon1 from '../../assets/logos/icon-shop.png';
import icon2 from '../../assets/logos/icon-news.png';
import imgShop from '../../assets/pictures/shop-img.png';
import imgNews from '../../assets/pictures/news-img.png';

export default function Bandera() {
  const [modalOpen, setModalOpen] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const titleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              setTitleVisible(true);
            }
            if (entry.target === buttonsRef.current) {
              setButtonsVisible(true);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonsRef.current) observer.unobserve(buttonsRef.current);
    };
  }, []);

  return (
    <section className="bandera" id="novedades">
      <div className="bandera__left">
        <h2 ref={titleRef} className={`bandera__title ${titleVisible ? 'bandera__title--visible' : ''}`}>LA MÚSICA<br />COMO<br />BANDERA</h2>
      </div>

      <div className="bandera__right">
        <div ref={buttonsRef} className={`bandera__buttons ${buttonsVisible ? 'bandera__buttons--visible' : ''}`}>
          <div className="bandera__button" onClick={openModal} role="button" tabIndex={0} onKeyPress={e => e.key === 'Enter' && openModal()}>
            <img className="bandera__icon" src={icon1} alt="icono merch oficial" />
            <img src={imgShop} alt="Botón Merch Oficial" className="bandera__img" />
            <div className="bandera__label">MERCH<br />OFICIAL</div>
          </div>
          <div className="bandera__button" onClick={openModal} role="button" tabIndex={0} onKeyPress={e => e.key === 'Enter' && openModal()}>
            <img className="bandera__icon" src={icon2} alt="icono últimas novedades" />
            <img src={imgNews} alt="Botón Últimas Novedades" className="bandera__img" />
            <div className="bandera__label">ÚLTIMAS<br />NOVEDADES</div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="bandera__modal-overlay" onClick={closeModal}>
          <div className="bandera__modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="bandera__modal-close" onClick={closeModal} aria-label="Cerrar modal">
              <FaTimes />
            </button>
            <FaSmileBeam className="bandera__modal-icon" />
            <h3 id="modal-title" className="bandera__modal-title">¡Estamos trabajando en esto!</h3>
            <p className="bandera__modal-text">
              Muy pronto habrá novedades.<br />
              ¡Estate atento!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}