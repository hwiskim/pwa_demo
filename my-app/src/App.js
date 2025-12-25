import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import UserProfileSetup1 from './pages/UserProfileSetup/UserProfileSetup1';
import UserProfileSetup2 from './pages/UserProfileSetup/UserProfileSetup2';
import MainPage from './pages/Main/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setup/profile1" element={<UserProfileSetup1 />} />
        <Route path="/setup/profile2" element={<UserProfileSetup2 />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
