import React, { useState, useEffect } from 'react';
import './AgeGate.css';

const AgeGate = ({ onConfirm }) => {
  const [visible, setVisible] = useState(true);

  const handleConfirm = () => {
    localStorage.setItem('ageConfirmed', 'true');
    setVisible(false);
  };

  useEffect(() => {
    const confirmed = localStorage.getItem('ageConfirmed');
    if (confirmed === 'true') {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="age-gate-overlay">
      <div className="age-gate-box">
        <h2>Are you over 18?</h2>
        <p>You must be of legal drinking age to enter this site.</p>
        <button onClick={handleConfirm}>Yes, I am over 18</button>
      </div>
    </div>
  );
};

export default AgeGate;
