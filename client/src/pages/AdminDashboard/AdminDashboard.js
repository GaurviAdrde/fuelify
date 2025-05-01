import React from 'react';
import './AdminDashboard.css';
import { FaUserShield, FaUsers, FaTools, FaCommentDots, FaChartBar } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, Admin</h1>
        <p className="dashboard-tagline">Manage the Fuelify system efficiently</p>
      </header>

      <section className="dashboard-services">
        <div className="dashboard-card">
          <FaUserShield className="dashboard-icon" />
          <h3>Manage Managers</h3>
          <p>Add, update, or remove manager accounts and permissions.</p>
        </div>
        <div className="dashboard-card">
          <FaUsers className="dashboard-icon" />
          <h3>Manage Users</h3>
          <p>View and manage user information and access rights.</p>
        </div>
        <div className="dashboard-card">
          <FaTools className="dashboard-icon" />
          <h3>Services Control</h3>
          <p>Enable, disable, or update services provided on the platform.</p>
        </div>
        <div className="dashboard-card">
          <FaCommentDots className="dashboard-icon" />
          <h3>Complaints & Feedback</h3>
          <p>Review user and manager complaints and feedback reports.</p>
        </div>
        <div className="dashboard-card">
          <FaChartBar className="dashboard-icon" />
          <h3>Reports</h3>
          <p>Generate overall system usage and performance reports.</p>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
