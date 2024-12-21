// App.js or App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router and Routes
import HomePage from './pages/HomePage'; // Update with your actual paths
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CseDepartment from './pages/CseDepartment';
import NotFound from './pages/NotFound';
import CodingClub from './pages/Coding_club/CodingClub';
import Login from './pages/Login';
import YearWiseEvents from './pages/Events';
import Register from './pages/Register';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cse-department" element={<CseDepartment />} />
        <Route path="/club/coding" element={<CodingClub/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/events" element={<YearWiseEvents/>} />
        <Route path="/register" element={<Register/>} />


        <Route path="*" element={<NotFound />} />  {/* Catch-all route for non-matching paths */}
      </Routes>
  );
}

export default App;
