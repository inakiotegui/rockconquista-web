import React from 'react';
import './ArtistModal.css';
import guasonesImg from '../../assets/pictures/lineup-img-6.png';
import cruzandoImg from '../../assets/pictures/lineup-img-1.png';
import planImg from '../../assets/pictures/lineup-img-3.png';
import mississippiImg from '../../assets/pictures/lineup-img-7.png';
import planeadorImg from '../../assets/pictures/lineup-img-8.png';
import wayraImg from '../../assets/pictures/lineup-img-9.png';
import danielaImg from '../../assets/pictures/lineup-img-2.png';
import enigmaticosImg from '../../assets/pictures/lineup-img-4.png';
import eximiosImg from '../../assets/pictures/lineup-img-5.png';

const artistData = {
  'GUASONES': {
    intro: 'Oriundos de La Plata y con mas de 30 años pisando los escenarios más grandes del mundo, son íconos del rock nacional.',
    image: guasonesImg,
  },
  'CRUZANDO EL CHARCO': {
    intro: 'Grupo de rock oriundo de La Plata con 13 años de trayectoria y una actualidad increíble rodando por todo el mundo.',
    image: cruzandoImg,
  },
  'EL PLAN DE LA MARIPOSA': {
    intro: 'Grupo musical formado en 2008, oriundos de Necochea, son una banda de rock latino y psicodélico integrada por siete músicos: cinco hermanos y dos amigos.',
    image: planImg,
  },
  'LA MISSISSIPPI': {
    intro: 'Con más de tres décadas de trayectoria, esta banda legendaria del blues rock argentino llega con toda su potencia y su inconfundible estilo para hacer historia en el norte.',
    image: mississippiImg,
  },
  'PLANEADOR V': {
    intro: 'Banda tributo más importante a Soda Estereo y Gustavo Cerati.',
    image: planeadorImg,
  },
  'WAYRA IGLESIAS': {
    intro: 'Artista con una impronta musical centrada en el blues elegante con tintes de rock y soul.<br /><br />Revelación del Consquín Rock 2023.',
    image: wayraImg,
  },
  'DANIELA MILAGROS': {
    intro: 'Artista emergente destacada de la escena pop rock argentina. Cantante, compositora, actriz y artista multi-instrumentista.',
    image: danielaImg,
  },
  'ENIGMÁTICOS': {
    intro: 'Banda familia emergente oriundos de Avellaneda, Santa Fe, con 7 años de trayectoria recorriendo escenarios por toda Argentina.',
    image: enigmaticosImg,
  },
  'EXIMIOS': {
    intro: 'Con una propuesta de rock-pop alternativo, letras profundas y una identidad que invita a la reflexión, la banda formada en 2016 viene dejando su huella en escenarios de toda la región.',
    image: eximiosImg,
  },
};

const ArtistModal = ({ artistName, onClose }) => {
  const artist = artistData[artistName];

  if (!artist) return null;

  return (
    <div className="artist-modal__backdrop" onClick={onClose}>
        <div className="artist-modal__container" onClick={(e) => e.stopPropagation()}>
            <h2 className="artist-modal__title">{artistName}</h2>
            <div className="artist-modal__content">
                <p className={`artist-modal__intro ${artistName === 'CRUZANDO EL CHARCO' ? 'artist-modal__intro--front' : ''}`} dangerouslySetInnerHTML={{ __html: artist.intro }}/>
            </div>
            <img className={`artist-modal__image ${['CRUZANDO EL CHARCO', 'PLANEADOR V'].includes(artistName) ? 'artist-modal__image--front' : ''}`} src={artist.image} alt={artistName}/>
        </div>
    </div>
  );
};

export default ArtistModal;