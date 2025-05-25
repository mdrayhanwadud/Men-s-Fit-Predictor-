import React, { useState } from 'react';
import './LoginRegisterPopup.css';

const LoginRegisterPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || 'Something went wrong');
        return;
      }

      localStorage.setItem('token', data.token);
      setMessage('Success!');
      setTimeout(() => {
        onClose(); // Close popup after login/register
        window.location.reload(); // Reload to reflect session
      }, 1000);
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Register'}</button>
        <p className="switch-link" onClick={handleSwitch}>
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </p>
        {message && <p className="message">{message}</p>}
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default LoginRegisterPopup;
