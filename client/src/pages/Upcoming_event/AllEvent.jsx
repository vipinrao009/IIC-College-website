import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../Context/baseUrl";

const GetAllEvents = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    link: "",
  });

  const fetchEvents = async () => {
    try {
      const { data } = await axiosInstance.get("/event/get-event");
      setEvents(data.events);
    } catch (error) {
      toast.error("Failed to fetch events.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axiosInstance.delete(`/event/delete-event/${id}`);
        toast.success("Event deleted successfully!");
        fetchEvents();
      } catch (error) {
        toast.error("Failed to delete event.");
      }
    }
  };

  const openEditModal = (event) => {
    setCurrentEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date.slice(0, 10),
      location: event.location,
      link: event.link,
    });
    setShowModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/event/update-event/${currentEvent._id}`, formData);
      toast.success("Event updated successfully!");
      setShowModal(false);
      fetchEvents();
    } catch (error) {
      toast.error("Failed to update event.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">All Events</h2>

      {events.length === 0 ? (
        <p className="text-gray-500">No events found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Link</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event._id}>
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">{event.title}</td>
                  <td className="border px-4 py-2">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{event.location}</td>
                  <td className="border px-4 py-2 break-all">{event.link || "N/A"}</td>
                  <td className="border px-4 py-2 flex gap-2 justify-center">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                      onClick={() => openEditModal(event)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      onClick={() => handleDelete(event._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Edit Event</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="Link (optional)"
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAllEvents;
