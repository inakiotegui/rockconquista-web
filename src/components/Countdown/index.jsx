import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-09-14T14:00:00');
    const now = new Date();
    const difference = eventDate - now;

    const totalSeconds = Math.max(Math.floor(difference / 1000), 0);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const containerRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowAnimation(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="countdown">
      <div
        ref={containerRef}
        className={`countdown__container ${showAnimation ? 'animate' : ''}`}
      >
        {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => (
          <div key={unit} className="countdown__block">
            <span className="countdown__number">
              {String(timeLeft[unit]).padStart(2, '0')}
            </span>
            <span className="countdown__label">
              {unit === 'days' ? 'DÍAS' :
               unit === 'hours' ? 'HORAS' :
               unit === 'minutes' ? 'MINUTOS' : 'SEGUNDOS'}
            </span>
            {i !== 3 && <span className="countdown__separator">:</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;