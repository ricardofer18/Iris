import React, { useState } from 'react';

const Dialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    laguna: '',
    idOd: '',
    idORP: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.laguna) {
      newErrors.laguna = 'Campo requerido';
    }
    if (!formData.idOd) {
      newErrors.idOd = 'Campo requerido';
    }
    if (!formData.idORP) {
      newErrors.idORP = 'Campo requerido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Send data to the server
      fetch('http://localhost:5000/api/v1/createLaguna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Respuesta del servidor:', data);
        })
        .catch((error) => {
          console.error('Error al enviar los datos:', error);
        })
        .finally(() => {
          setFormData({
            laguna: '',
            idOd: '',
            idORP: '',
          });
          setErrors({});
          onClose();
        });
    }
  };

  return (
    <dialog open={isOpen}>
      <form className='dialog-form' onSubmit={handleSubmit}>
        <div className='cerrar'>
          <button className='no-bg' onClick={onClose}>
            <img
              src='https://img.icons8.com/?size=512&id=bq2p5JPmCrjK&format=png'
              width='40px'
              draggable='false'
            />
          </button>
        </div>

        <h1>Crear Laguna</h1>
        <p>Rellena todos los campos</p>
        <div>
          <input
            type='text'
            name='laguna'
            placeholder='Nombre Laguna'
            value={formData.laguna}
            onChange={handleChange}
          />
          {errors.laguna && <div className='error'>{errors.laguna}</div>}
        </div>
        <div>
          <input
            type='number'
            name='idOd'
            placeholder='ID Od'
            value={formData.idOd}
            onChange={handleChange}
          />
          {errors.idOd && <div className='error'>{errors.idOd}</div>}
        </div>
        <div>
          <input
            type='number'
            name='idORP'
            placeholder='ID ORD'
            value={formData.idORP}
            onChange={handleChange}
          />
          {errors.idORP && <div className='error'>{errors.idORP}</div>}
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </dialog>
  );
};

export default Dialog;
