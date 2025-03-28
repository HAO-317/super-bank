import React, { useState } from 'react';
import { CreditCard } from 'react-kawaii'; 
import './SuperBank.css'; 


const SuperBank: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); 

  const getMood = () => {
    if (balance > 1000) return 'excited';
    if (balance > 500) return 'happy';
    if (balance > 0) return 'sad';
    return 'shocked';
  };

  const handleDeposit = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      setBalance((prev) => prev + numAmount);
      setAmount('');
    } else {
      alert('Bitte geben einen gültigen Betrag ein!');
    }
  };


  const handleWithdraw = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      if (numAmount <= balance) {
        setBalance((prev) => prev - numAmount);
        setAmount('');
      } else {
        alert('Kontostand nicht genug');
      }
    } else {
      alert('Bitte geben einen gültigen Betrag ein!');
    }
  };


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`super-bank-container ${theme}`}>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <CreditCard size={200} mood={getMood()} color="#83D1FB" />

      <h1>SUPER BANK</h1>

      <div className="account-info">
        <h3>Dein Kontostand</h3>
        <p>{balance.toFixed(2)} €</p>

        <input
          type="number"
          placeholder="Gib einen Geldbetrag ein"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
       
        <div className="buttons">
          <button onClick={handleDeposit}>Einzahlen</button>
          <button onClick={handleWithdraw}>Auszahlen</button>
        </div>
      </div>
    </div>
  );
};

export default SuperBank;