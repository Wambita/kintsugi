import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './statistics.css';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setSelectedAmount('');
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = selectedAmount || customAmount;

    if (!amount) {
      alert('Please select an amount or enter a custom amount');
      return;
    }

    alert(`Thank you for your donation of KES ${amount}!`);
    // Payment processing logic goes here
  };

  return (
    <div className="donation-page">
      <Header />
      <section>
        <h1 className="section-title">Make a Difference</h1>
        <div className="donation-grid">
          <div className="donation-info">
            <h2>Your Support Matters</h2>
            <p>
              Your donation helps us provide essential services and support to
              survivors of gender-based violence across Kenya. Every contribution makes
              a real difference in someone's life.
            </p>
            <ul className="impact-list">
              <li>
                <i className="fas fa-home"></i>
                <span>Provide safe shelter for survivors</span>
              </li>
              <li>
                <i className="fas fa-hand-holding-medical"></i>
                <span>Fund medical and psychological support</span>
              </li>
              <li>
                <i className="fas fa-gavel"></i>
                <span>Offer legal aid and advocacy</span>
              </li>
              <li>
                <i className="fas fa-graduation-cap"></i>
                <span>Support education and empowerment programs</span>
              </li>
            </ul>
            <p>Together, we can create a safer and more equitable society for all.</p>
          </div>

          <div className="donation-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Select Amount</label>
                <div className="amount-options">
                  <div
                    className={`amount-option ${
                      selectedAmount === '1000' ? 'selected' : ''
                    }`}
                    onClick={() => handleAmountClick('1000')}
                  >
                    <h3>KES 1,000</h3>
                    <p>Basic Support</p>
                  </div>
                  <div
                    className={`amount-option ${
                      selectedAmount === '5000' ? 'selected' : ''
                    }`}
                    onClick={() => handleAmountClick('5000')}
                  >
                    <h3>KES 5,000</h3>
                    <p>Regular Support</p>
                  </div>
                  <div
                    className={`amount-option ${
                      selectedAmount === '10000' ? 'selected' : ''
                    }`}
                    onClick={() => handleAmountClick('10000')}
                  >
                    <h3>KES 10,000</h3>
                    <p>Premium Support</p>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="Or enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <select name="payment-method" required>
                  <option value="">Select payment method</option>
                  <option value="mpesa">M-PESA</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donate;
