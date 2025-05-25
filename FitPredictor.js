import React, { useState } from 'react';
import './FitPredictor.css';

const FitPredictor = () => {
  const [height, setHeight] = useState('');
  const [chest, setChest] = useState('');
  const [weight, setWeight] = useState('');
  const [prediction, setPrediction] = useState('');

  const handlePredict = () => {
    const h = parseInt(height);
    const c = parseFloat(chest); // chest in inches
    const w = parseInt(weight);

    if (!h || !c || !w) {
      setPrediction('Please enter all values.');
      return;
    }

    let size = '';
    let fit = '';

    // Determine size (inches based)
    if (c >= 50) {
      size = 'XXXL';
    } else if (c >= 46) {
      size = 'XXL';
    } else if (c >= 42) {
      size = 'XL';
    } else if (c >= 38) {
      size = 'L';
    } else if (c >= 34) {
      size = 'M';
    } else {
      size = 'S';
    }

    // Determine fit
    // If chest and weight closer to lower end of size range → Slim Fit
    // Else → Regular Fit
    switch (size) {
      case 'XXXL':
        fit = (c <= 52 && w <= 110) ? 'Slim Fit' : 'Regular Fit';
        break;
      case 'XXL':
        fit = (c <= 48 && w <= 100) ? 'Slim Fit' : 'Regular Fit';
        break;
      case 'XL':
        fit = (c <= 44 && w <= 90) ? 'Slim Fit' : 'Regular Fit';
        break;
      case 'L':
        fit = (c <= 40 && w <= 80) ? 'Slim Fit' : 'Regular Fit';
        break;
      case 'M':
        fit = (c <= 36 && w <= 70) ? 'Slim Fit' : 'Regular Fit';
        break;
      case 'S':
        fit = (c <= 32 && w <= 60) ? 'Slim Fit' : 'Regular Fit';
        break;
      default:
        fit = 'Regular Fit';
    }

    setPrediction(`Your fit is likely: ${size}, ${fit}`);
  };

  return (
    <div className="fit-predictor">
      <h2>Fit Predictor</h2>
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Chest (inches)"
        value={chest}
        onChange={(e) => setChest(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={handlePredict}>Predict Fit</button>
      {prediction && <p className="prediction">{prediction}</p>}
    </div>
  );
};

export default FitPredictor;
