// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogFormPage from './pages/BlogFormPage';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/new" element={<BlogFormPage />} />
        <Route path="/edit/:id" element={<BlogFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
