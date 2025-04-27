import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../Context/baseUrl";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';

const UploadEventData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    type: "photo",
    description: "",
    club: "coding",
    theme: "",
    no_student: "",
    no_faculty: "",
    speaker: "",
    outcome: "",
    event_for: ""
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
      payload.append("date", formData.date);
      payload.append("location", formData.location);
      payload.append("type", formData.type);
      payload.append("description", formData.description);
      payload.append("club", formData.club);
      payload.append("theme", formData.theme);
      payload.append("no_student", formData.no_student);
      payload.append("no_faculty", formData.no_faculty);
      payload.append("speaker", formData.speaker);
      payload.append("outcome", formData.outcome);
      payload.append("event_for", formData.event_for);
      for (let i = 0; i < files.length; i++) {
        payload.append("files", files[i]);
      }

      await axiosInstance.post("/gallery/upload", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Gallery added successfully!");
      setFormData({ title: "", date: "", location: "", type: "photo", description: "" });
      setFiles([]);
      navigate("/event"); 
    } catch (err) {
      toast.error("Error adding gallery");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="club"
          value={formData.club}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="coding">Coding Club</option>
          <option value="robotic">Robotic Club</option>
          <option value="gaming">Gaming Club</option>
          <option value="hackthon">Hackthon Club</option>
          <option value="gate">Gate Club</option>
          <option value="automobile">Automobile Club</option>
          <option value="sport">Sport Club</option>
          <option value="placement">Placement Club</option>
          <option value="autocad">AutoCAD Club</option>
          <option value="maintenance">Maintenance Club</option>
          <option value="iot">AI & IOT Club</option>
          <option value="cultural">Cultural Club</option>
          <option value="infra">Infra Club</option>
          <option value="poster">Poster Club</option>
          
        </select>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Name of IIC Event"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          placeholder="Theme of Event"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Date"
          required
          className="w-full p-2 border rounded"
        />

        <input 
           type="text"
           name="location"
           value={formData.location}
           onChange={handleChange}
           placeholder="Venue of Event"
           className="w-full p-2 border rounded"
        />
        <input 
           type="text"
           name="event_for"
           value={formData.event_for}
           onChange={handleChange}
           placeholder="Event for"
           className="w-full p-2 border rounded"
        />
        <input 
           type="text"
           name="no_student"
           value={formData.no_student}
           onChange={handleChange}
           placeholder="No. of Students Present"
           className="w-full p-2 border rounded"
        />
        <input 
           type="text"
           name="no_faculty"
           value={formData.no_faculty}
           onChange={handleChange}
           placeholder="No. of Faculty Present"
           className="w-full p-2 border rounded"
        />
        <input 
           type="text"
           name="speaker"
           value={formData.speaker}
           onChange={handleChange}
           placeholder="Speakers Invited (Internal)"
           className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Event objective"
          rows="3"
          className="w-full p-2 border rounded"
        ></textarea>

        <textarea
          name="outcome"
          value={formData.outcome}
          onChange={handleChange}
          placeholder="Event outcome"
          rows="3"
          className="w-full p-2 border rounded"
        ></textarea>

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
         {loading ? <FaSpinner className="animate-spin mx-auto" /> : "Add to Gallery"}
        </button>
      </form>
    </div>
  );
};

export default UploadEventData;
