import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CseDepartment from './pages/CseDepartment';
import NotFound from './pages/NotFound';
import CodingClub from './pages/Coding_club/CodingClub';
import Login from './pages/Login';
import YearWiseEvents from './pages/Events';
import Register from './pages/Register';
import Profile from './pages/profile';
import AdminMenu from './pages/Notices/AdminMenu';
import Event from "./pages/Upcoming_event/Event"
import EventData from './pages/Event/EventData';
import YearWiseEvent from './pages/YearWiseEvent';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cse-department" element={<CseDepartment />} />
        <Route path="/club/coding" element={<CodingClub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<YearWiseEvent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notice" element={<AdminMenu />} />
        <Route path="/upcoming-event" element={<Event />} />
        <Route path="/event" element={<EventData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
