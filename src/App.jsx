import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Chatpage from './pages/Chatpage.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}

export default App;