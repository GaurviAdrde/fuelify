// src/pages/Landing/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title">Fuelify</h1>
          <p className="tagline">Your Reliable On-Road Assistance Partner</p>
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
    </div>
  );
};

export default Home;
