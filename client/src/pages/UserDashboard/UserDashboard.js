import React from 'react';
import './UserDashboard.css';
import { FaGasPump, FaUserCircle } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { MdTrackChanges } from 'react-icons/md';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <header className="user-header">
        <h1>User Dashboard</h1>
        <p>Welcome back! Choose a service below.</p>
      </header>

      <section className="user-services">
        <div className="user-card">
          <FaGasPump className="user-icon" />
          <h3>Fuel Refill</h3>
          <p>Quick and reliable fuel delivery service at your location.</p>
        </div>
        <div className="user-card">
          <GiCarWheel className="user-icon" />
          <h3>Breakdown Services</h3>
          <p>Tyre repair, jumpstart, towing – all at your fingertips.</p>
        </div>
        <div className="user-card">
          <MdTrackChanges className="user-icon" />
          <h3>Track</h3>
          <p>Track service progress or live updates from our team.</p>
        </div>
        <div className="user-card">
          <FaUserCircle className="user-icon" />
          <h3>Profile</h3>
          <p>Update your details, preferences, and saved locations.</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
