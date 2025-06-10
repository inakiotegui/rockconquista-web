import './Tickets.css'

export default function Tickets() {
  const handleClick = () => {
    window.open('https://passgo.com.ar/evento/409/informacion', '_blank');
  };

  return (
    <section className="tickets" id="tickets">
      <div className="tickets__button-wrapper">
        <button className="tickets__button" onClick={handleClick}>
          COMPRÁ TU TICKET
        </button>
      </div>
    </section>
  );
}