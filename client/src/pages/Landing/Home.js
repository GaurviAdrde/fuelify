// src/pages/Landing/Home.js
import React from 'react';
import './Home.css';
import heroImage from '../../assets/fuelify3a.png';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title">Fuelify</h1>
          <p className="tagline">Your Reliable On-Road Assistance Partner</p>
          <img src={heroImage} alt="Fuelify Hero" className="hero-image" />
          <a href="/user" className="cta-button">Get Started</a>
        </div>
      </header>

      <section className="services-section">
        <h2>What We Offer</h2>
        <div className="services">
          <div className="card">
            <h3>Fuel Refill</h3>
            <p>Order fuel delivery directly to your breakdown location.</p>
          </div>
          <div className="card">
            <h3>Breakdown Services</h3>
            <p>Jumpstart, tyre repair, or towing — all just a tap away.</p>
          </div>
          <div className="card">
            <h3>Mechanic Services</h3>
            <p>Find & connect with nearby certified mechanics instantly.</p>
          </div>
        </div>
      </section>

      <section className="ratings-section">
  <h2>What Our Users Say</h2>
  <div className="rating-card">
    <p>"Super quick and reliable service!"</p>
    <div className="stars">⭐⭐⭐⭐⭐</div>
    <p>- Ramesh, Delhi</p>
  </div>
  {/* Add more if needed */}
</section>

    </div>
  );
};

export default Home;
