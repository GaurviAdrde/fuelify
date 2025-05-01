import React from 'react';
import './ManagerDashboard.css';
import { MdDashboard, MdPayment } from 'react-icons/md';
import { FaClipboardList, FaUsers } from 'react-icons/fa';
import { GiFuelTank } from 'react-icons/gi';

const ManagerDashboard = () => {
  return (
    <div className="manager-dashboard">
      <header className="manager-header">
        <h1>Manager Dashboard</h1>
        <p>Monitor, manage, and make decisions efficiently.</p>
      </header>

      <section className="manager-panels">
        <div className="manager-card">
          <MdDashboard className="manager-icon" />
          <h3>Overview & Summary</h3>
          <p>Real-time service metrics, alerts, and KPIs.</p>
        </div>
        <div className="manager-card">
          <FaClipboardList className="manager-icon" />
          <h3>Order Management</h3>
          <p>Track and fulfill all active service requests.</p>
        </div>
        <div className="manager-card">
          <GiFuelTank className="manager-icon" />
          <h3>Fuel Management</h3>
          <p>View inventory, usage trends, and refills.</p>
        </div>
        <div className="manager-card">
          <FaUsers className="manager-icon" />
          <h3>Customer Management</h3>
          <p>Access user profiles, issues, and preferences.</p>
        </div>
        <div className="manager-card">
          <MdPayment className="manager-icon" />
          <h3>Payment & Invoicing</h3>
          <p>Check transactions and download invoices.</p>
        </div>
      </section>
    </div>
  );
};

export default ManagerDashboard;
