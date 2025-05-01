import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Landing/Home';
import Login from './pages/Login/Login';
import UserDashboard from './pages/UserDashboard/UserDashboard';
// import AppDashboard from './pages/AppDashboard/AppDashboard';
import ManagerDashboard from './pages/ManagerDashboard/ManagerDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" component={Login} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
