import React, { useEffect, useState } from 'react';
import { usePopup } from '../../context/PopupContext.jsx';

import './PopupContact.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';

const PopupContact = () => {
  const { showPopup, openPopup, closePopup } = usePopup();
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
  const [popupTriggered, setPopupTriggered] = useState(false);

  useEffect(() => {
    if (popupTriggered) return;

    const timer = setTimeout(() => {
      openPopup();
      setPopupTriggered(true);
    }, 10000);

  }, [popupTriggered, openPopup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setForm(prev => ({ ...prev, telefono: value }));
  };

  const serviceID = "rock-mail-sender";
  const templateID = "contact_form_rock";
  const userID = "4jfgw9Z0f_7SNUJiR";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceID, templateID, {
      from_name: form.nombre,
      from_email: form.email,
      message: `Teléfono: ${form.telefono}`
    }, userID)
      .then(() => {
        alert("Gracias por tu mensaje. Te responderemos pronto.");
        closePopup();
        setForm({ nombre: '', email: '', telefono: '' });
      }).catch(() => {
        alert("Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.");
      });
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close" onClick={closePopup}>×</button>
        <h2 className="popup-title">¿Querés ser el primero en enterarte de todo?</h2>
        <form onSubmit={handleSubmit} className="popup-form">
          <label className="popup-label" htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <label className="popup-label" htmlFor="email">Dirección de correo electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label className="popup-label">Número de teléfono</label>
          <div className="phone-wrapper">
            <PhoneInput
              country={'ar'}
              value={form.telefono}
              onChange={handlePhoneChange}
              inputProps={{ required: true }}
              containerClass="phone-container"
              inputClass="phone-input"
              buttonClass="phone-button"
              dropdownClass="phone-dropdown"
              enableSearch
            />
          </div>

          <p className="popup-terms">Al enviar este formulario, acepta la Política de Privacidad y los Términos y Condiciones de U51NA Entertainment. Doy mi consentimiento para que U51NA Entertainment recopile mi nombre, correo electrónico, dirección y número de teléfono, y para que se pongan en contacto conmigo por correo electrónico o mediante el número proporcionado.</p>

          <button type="submit" className="popup-button">Recibir todas las novedades</button>
        </form>
      </div>
    </div>
  );
};

export default PopupContact;