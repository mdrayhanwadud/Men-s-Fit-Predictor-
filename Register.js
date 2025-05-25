import React, { useState } from 'react';
import './Login.css';

const Register = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Registration successful!');
        onClose();
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      alert('Error during registration');
    }
  };

  return (
    <div className="login-popup">
      <div className="login-box">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
