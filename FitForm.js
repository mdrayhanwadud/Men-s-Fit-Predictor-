import React, { useState } from 'react';
import axios from 'axios';

const FitForm = () => {
  const [data, setData] = useState({ chest: '', waist: '', hip: '' });
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/fit/recommend', data);
      setResult(res.data);
    } catch (err) {
      console.error("Fit API error", err);
    }
  };

  return (
    <div className="fit-form">
      <h2>Fit Predictor Tool</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="chest" placeholder="Chest (in)" onChange={handleChange} required />
        <input type="number" name="waist" placeholder="Waist (in)" onChange={handleChange} required />
        <input type="number" name="hip" placeholder="Hip (in)" onChange={handleChange} required />
        <button type="submit">Predict Size</button>
      </form>

      {result.length > 0 && (
        <div>
          <h3>Recommended Sizes</h3>
          <ul>
            {result.map((item, idx) => (
              <li key={idx}>{item.product}: {item.recommendedSize}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FitForm;
