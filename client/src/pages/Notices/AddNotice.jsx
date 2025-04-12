import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../Context/baseUrl";
import { useNavigate } from "react-router-dom";

const AddNotice = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    visible: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/notice/add", formData);
      toast.success("Notice added successfully!");
      setFormData({ title: "", link: "", visible: true });
      navigate("/")
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };
  

  return (
    <div className="bg-white p-6 shadow rounded max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Add New Notice</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Notice Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter notice title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Notice Link (optional)</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="e.g. https://example.com/notice.pdf"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="visible"
            checked={formData.visible}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Visible to users</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Notice
        </button>
      </form>
    </div>
  );
};

export default AddNotice;