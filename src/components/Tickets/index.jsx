import { useEffect, useRef, useState } from 'react';
import './Tickets.css';

export default function Tickets() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    window.open('https://passgo.com.ar/evento/409/informacion', '_blank');
  };

  return (
    <section className="tickets" id="tickets" ref={ref}>
      <div className={`tickets__button-wrapper ${isVisible ? 'visible' : ''}`}>
        <button className="tickets__button" onClick={handleClick}>
          COMPRÁ TU TICKET
        </button>
      </div>
    </section>
  );
}