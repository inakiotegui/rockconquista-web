import React, { useState } from 'react';
import './Bandera.css';

import { FaSmileBeam, FaTimes } from 'react-icons/fa';

import icon1 from '../../assets/logos/icon-shop.png';
import icon2 from '../../assets/logos/icon-news.png';
import imgShop from '../../assets/pictures/shop-img.png';
import imgNews from '../../assets/pictures/news-img.png';

export default function Bandera() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="bandera" id="novedades">
      <div className="bandera__left">
        <h2 className="bandera__title">LA MÚSICA<br />COMO<br />BANDERA</h2>
      </div>

      <div className="bandera__right">
        <div className="bandera__buttons">
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