import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../Context/baseUrl";
import { useNavigate } from "react-router-dom";

const UploadEventData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    type: "photo",
    description: "",
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("year", formData.year);
      payload.append("type", formData.type);
      payload.append("description", formData.description);
      for (let i = 0; i < files.length; i++) {
        payload.append("files", files[i]);
      }

      await axiosInstance.post("/gallery/upload", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Gallery added successfully!");
      setFormData({ title: "", year: "", type: "photo", description: "" });
      setFiles([]);
      navigate("/"); 
    } catch (err) {
      toast.error("Error adding gallery");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add Gallery</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Year"
          required
          className="w-full p-2 border rounded"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="photo">Photo</option>
          <option value="video">Video</option>
          {/* <option value="pdf">PDF</option> */}
        </select>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          rows="3"
          className="w-full p-2 border rounded"
        ></textarea>

        <input
          type="file"
          onChange={handleFileChange}
          multiple
          accept="image/*,video/*,application/pdf"
          className="w-full"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add to Gallery"}
        </button>
      </form>
    </div>
  );
};

export default UploadEventData;
