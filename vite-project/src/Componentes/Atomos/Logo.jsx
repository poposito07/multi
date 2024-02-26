// components/Atomos/Logo.js
import React from 'react';
import logoImage from '../../assets/img/product.png'; // Importa la imagen principal del logo
import logoIcon from '../../assets/img/recti.png'; // Importa la imagen adicional del logo
import nuevaImagen from '../../assets/img/tenis.png'; // Importa la nueva imagen
import './Logo.css'; // Importa el archivo CSS del logo

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo-main" />
      <img src={logoIcon} alt="Icono" className="logo-icon" />
      <img src={nuevaImagen} alt="Nueva Imagen" className="nueva-imagen" /> {/* Nueva imagen encima del logo */}
    </div>
  );
};

export default Logo;
