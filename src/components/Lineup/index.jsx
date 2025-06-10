import React from 'react';
import './Lineup.css';
import lineupTitle from '../../assets/logos/line-up-logo.png';

const Lineup = () => {
  return (
    <section className="lineup" id="lineup">
      <img src={lineupTitle} alt="Lineup" className="lineup__title" />
      <div className="lineup__tiers">
        <div className="lineup__tier lineup__tier--one">
            <div className="lineup__band">GUASONES✦</div>
            <div className="lineup__band">✦CRUZANDO EL CHARCO✦</div>
            <div className="lineup__band">✦EL PLAN DE LA MARIPOSA</div>
        </div>
        <div className="lineup__tier lineup__tier--two">
            <div className="lineup__band">LA MISSISSIPPI✦</div>
            <div className="lineup__band">✦PLANEADOR V✦</div>
            <div className="lineup__band">✦WAYRA MENDOZA✦</div>
        </div>
        <div className="lineup__tier lineup__tier--three">
            <div className="lineup__band">✦DANIELA MILAGROS✦</div>
            <div className="lineup__band">✦ENIGMÁTICOS✦</div>
            <div className="lineup__band">✦EXIMIOS✦</div>
        </div>
      </div>
    </section>
  );
};

export default Lineup;