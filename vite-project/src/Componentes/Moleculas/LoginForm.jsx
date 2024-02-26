// components/Moleculas/LoginForm.js
import React, { useState } from 'react';
import Button from '../Atomos/Button';
import FacebookLoginButton from '../Atomos/FacebookLoginButton';
import GoogleLoginButton from '../Atomos/GoogleLoginButton';
import Input from '../Atomos/Input';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleLogin = () => {
    onLogin({ username, password });
  };

  const handleGoogle = () => {
    // Implementar la lógica de inicio de sesión con Google
  };

  const handleFacebook = () => {
    // Implementar la lógica de inicio de sesión con Facebook
  };

  const handleRegister = () => {
    // Implementar la lógica para redirigir al usuario a la página de registro
  };

  return (
    <div className="login-form-container">
      <div className="login-buttons-container">
        <GoogleLoginButton onClick={handleGoogle} />
        <FacebookLoginButton onClick={handleFacebook} />
      </div>
      <Input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="additional-options">
        <p><a href="#">¿Olvidaste la contraseña?</a></p>
        <label>
          <input type="checkbox" checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} />
          Acepto los términos y condiciones
        </label>
        <Button onClick={handleLogin}>Iniciar Sesión</Button>
        <Button onClick={handleRegister}>Registrarse</Button> {/* Agregar el botón de registro */}
      </div>
    </div>
  );
};

export default LoginForm;
