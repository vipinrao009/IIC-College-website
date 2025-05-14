// components/JoinClubModal.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../Context/baseUrl";

const JoinClubModal = ({ isOpen, onClose, clubName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    roll: "",
    club: clubName,
  });

  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/club/join-club", formData);
      toast.success(res.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        year: "",
        roll: "",
        club: clubName,
      });
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h3 className="text-lg text-center font-bold mb-4">Join {capitalizeFirstLetter(clubName)} Club</h3>

        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input type="text" name="roll" value={formData.roll} onChange={handleChange} placeholder="Enter your University roll number" className="w-full p-2 border border-gray-300 rounded mb-4" />

        <select name="year" value={formData.year} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-4">
          <option value="">Select Year</option>
          <option value="I year">I year</option>
          <option value="II year">II year</option>
          <option value="III year">III year</option>
          <option value="IV year">IV year</option>
        </select>

        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default JoinClubModal;
