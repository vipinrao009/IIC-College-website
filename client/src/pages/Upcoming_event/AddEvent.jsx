import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../Context/baseUrl";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';

const AddEvent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "College Campus",
    link: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/event/add-event", formData);
      toast.success("Event added successfully!");
      setFormData({
        title: "",
        description: "",
        date: "",
        location: "College Campus",
        link: ""
      });
      navigate("/"); // ya jaha tu le jana chahe
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block font-medium text-sm mb-1">Event Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Event Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Event Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
            placeholder="e.g. College Campus"
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">External Link (optional)</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
            placeholder="e.g. https://event.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          { loading ? (
            <div className="flex justify-center items-center">
               <FaSpinner/>
            </div>
          ):(
            'Add Event'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
