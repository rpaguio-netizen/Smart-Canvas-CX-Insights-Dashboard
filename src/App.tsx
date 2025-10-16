import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { SmartCanvas } from './pages/SmartCanvas';
import { Header } from './components/Header';
export function App() {
  return <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/smart-canvas/:id" element={<SmartCanvas />} />
        </Routes>
      </div>
    </div>;
}