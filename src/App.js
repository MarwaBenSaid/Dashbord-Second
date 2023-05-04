import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import Profil from './components/Profil';

const App = () => {
  return (
    <BrowserRouter>
    
    <Dashboard>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/user" element={<Profil/>} />
          
        </Routes>
        </Dashboard>
    </BrowserRouter>
  );
};

export default App;