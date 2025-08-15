import agencyLogo from '../../assets/logos/agency-logo.svg';
import './DevBar.css';

export default function DevBar() {
  return (
    <div className="devbar">
      <div className="devbar__inner">
        <span className="devbar__text">Desarrollado por</span>
        <img src={agencyLogo} alt="Agency logo" className="devbar__logo" />
      </div>
    </div>
  );
}
