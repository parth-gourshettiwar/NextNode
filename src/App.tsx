import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import TheoryPage from './components/TheoryPage';
import VisualizerPage from './components/VisualizerPage';
import CodePage from './components/CodePage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/visualizer" element={<VisualizerPage />} />
          <Route path="/code" element={<CodePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
