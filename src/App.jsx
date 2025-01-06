import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Chatpage from './pages/Chatpage.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import UserList from './components/UserList.jsx'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<UserList />} /> {/* Add the UserList route */}
        <Route path="/chat/:userId" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}

export default App;