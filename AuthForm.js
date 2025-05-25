import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    const data = isLogin ? form : { ...form };
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, data);
      if (isLogin) onLogin(res.data.token);
      else alert('Registered! You can now log in.');
    } catch (err) {
      alert(err.response?.data?.error || 'Error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {!isLogin && (
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', marginTop: '10px' }}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </p>
    </form>
  );
};

export default AuthForm;
