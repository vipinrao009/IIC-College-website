import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CseDepartment from './pages/CseDepartment';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/profile';
import AdminMenu from './pages/Notices/AdminMenu';
import Event from "./pages/Upcoming_event/Event"
import EventData from './pages/Event/EventData';
import YearWiseEvent from './pages/YearWiseEvent';
import CodingClub from './Components/Clubs/Coding_club/CodingClub';
import RoboticClub from './Components/Clubs/Robotic club/RoboticClub';
import GateClub from './Components/Clubs/Gate_club/GateClub';
import GamingClub from './Components/Clubs/Gaming_club/GamingClub';
import AutocadClub from './Components/Clubs/Autocad_club/AutocadClub';
import HackthonClub from './Components/Clubs/Hackthon_club/HackthonClub';
import TNPClub from './Components/Clubs/TNP_club/TNP_club';
import SportClub from './Components/Clubs/Sport_club/SportClub';
import AutomobileClub from './Components/Clubs/Automobile_club/AutomobileClub';
import MaintenanceClub from './Components/Clubs/Maintenance_club/MaintenanceClub';

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
        <Route path="/club/robotic" element={<RoboticClub />} />
        <Route path="/club/gate" element={<GateClub />} />
        <Route path="/club/gaming" element={<GamingClub />} />
        <Route path="/club/autocad" element={<AutocadClub />} />
        <Route path="/club/hackthon" element={<HackthonClub />} />
        <Route path="/club/placement" element={<TNPClub />} />
        <Route path="/club/sport" element={<SportClub />} />
        <Route path="/club/automobile" element={<AutomobileClub />} />
        <Route path="/club/maintenance" element={<MaintenanceClub />} />
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
