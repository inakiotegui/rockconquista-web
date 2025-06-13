import React, { useState, useEffect, useRef } from 'react';
import './Newsletter.css';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from 'react-icons/fa';
import texturaFondo from '../../assets/bg/texture-1.png';

const NewsletterBanner = () => {
    const [email, setEmail] = useState('');

    const serviceID = "rock-mail-sender";
    const templateID = "contact_form_rock";
    const userID = "4jfgw9Z0f_7SNUJiR";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(serviceID, templateID, {
        from_name: 'Suscripción newsletter',
        from_email: email,
        message: 'Usuario registrado al newsletter desde el banner.',
        }, userID)
        .then(() => {
            alert("¡Gracias por suscribirte!");
            setEmail('');
        })
        .catch(() => {
            alert("Hubo un error al suscribirte. Por favor, intentá nuevamente.");
        });
    };

    const containerRef = useRef(null);
    const [showAnimation, setShowAnimation] = useState(false);

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
        <section className="newsletter" id="newsletter">
            <div className="newsletter-banner">
                <div ref={containerRef} className={`newsletter-banner__text ${showAnimation ? 'animate' : ''}`}>
                    <h2 className="newsletter-banner__title">Newsletter</h2>
                    <p className="newsletter-banner__subtitle">Enterate antes que nadie de todas las novedades</p>
                </div>
                <form ref={containerRef} className={`newsletter-banner__form ${showAnimation ? 'animate' : ''}`} onSubmit={handleSubmit}>
                    <input
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-banner__input"
                    />
                    <button type="submit" className="newsletter-banner__button" aria-label="Enviar"><FaPaperPlane /></button>
                </form>
                <div
                    className="newsletter-banner__texture"
                    style={{ backgroundImage: `url(${texturaFondo})` }}
                />
            </div>
        </section>
    );
};

export default NewsletterBanner;