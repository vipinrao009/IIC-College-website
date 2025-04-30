import React, { useEffect, useState } from "react";
import axiosInstance from "../../Context/baseUrl";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";
import { FaSpinner } from 'react-icons/fa';

const GetAllGallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [downloadID, setDownloadID] = useState(null)
  const [deleteID, setDeleteID] = useState(null)

  const fetchGalleries = async () => {
    try {
      const { data } = await axiosInstance.get("/gallery/fetch", {
        withCredentials: true,
      });
      setGalleries(data.gallery || []);
    } catch (error) {
      toast.error("Failed to load galleries");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      setDeleteID(id)
      await axiosInstance.delete(`/gallery/delete/${id}`, {
        withCredentials: true,
      });
      toast.success("Deleted successfully!");
      fetchGalleries(); // Refresh
    } catch (err) {
      toast.error("Delete failed");
    }finally{
      setDeleteID(null)
    }
  };

  const openEditModal = (item) => {
    setEditData(item);
    setEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/gallery/update/${editData._id}`, editData, {
        withCredentials: true,
      });
      toast.success("Gallery updated!");
      setEditModalOpen(false);
      fetchGalleries();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const handleDownload = async (id) => {
    try {
      setDownloadID(id)
      const response = await axiosInstance.post(
        `/gallery/generate-pdf/${id}`,
        {},
        {
          withCredentials: true,
          responseType: 'blob',
        }
      );
  
      const blob = new Blob([response.data], { type: 'application/pdf' }); // <-- Add type
      const url = window.URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'event-report.pdf'); // file name
      document.body.appendChild(link); // <-- Ye already theek hai
      link.click();
  
      // CLEANUP (important)
      document.body.removeChild(link); // <- link ko remove karo
      window.URL.revokeObjectURL(url); // <- URL ko revoke karo
    } catch (error) {
      console.error(error);
      toast.error('Failed to download PDF');
    }finally{
      setDownloadID(null)
    }
  };
  
  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">All Events</h2>
      {galleries.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Venue</th>
                <th className="border px-4 py-2">Club</th>
                <th className="border px-4 py-2">Objective</th>
                <th className="border px-4 py-2">Files</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {galleries.map((item, index) => (
                <tr key={item._id}>
                  <td className="border px-2 py-1 text-center">{index + 1}</td>
                  <td className="border px-2 font-semibold py-1">{item.title}</td>
                  <td className="border px-2 py-1">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="border px-2 py-1">{item.location}</td>
                  <td className="border px-2 py-1">{(item.club)}</td>
                  <td className="border px-2 py-1 max-w-[180px] text-ellipsis overflow-hidden whitespace-nowrap" title={item.description || "—"}>
                    {item.description || "—"}
                  </td>
                  <td className="border px-2 py-1 space-y-2">
                    {item.type === "pdf" ? (
                        item.files.map((file, i) => (
                        <iframe
                            key={i}
                            src={file.url}
                            title={`PDF Preview ${i}`}
                            width="100%"
                            height="300px"
                            className="border rounded"
                        />
                        ))
                    ) : item.type === "photo" ? (
                        <div className="flex overflow-x-auto space-x-2 max-w-[300px]">
                        {item.files.map((file, i) => (
                            <img
                            key={i}
                            src={file.url}
                            alt={`Image ${i}`}
                            onClick={() => setPreviewImage(file.url)}
                            className="w-24 h-24 cursor-pointer object-cover rounded border"
                            />
                        ))}
                        </div>
                    ) : item.type === "video" ? (
                        item.files.map((file, i) => (
                        <video key={i} controls width="250" className="rounded">
                            <source src={file.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        ))
                    ) : (
                        <p>No file available</p>
                    )}
                    </td>
                  <td className="border px-2 py-1 space-x-2 text-center">
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() => openEditModal(item)}
                        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                      >
                        {deleteID === item._id ? (
                          <FaSpinner className="animate-spin" />
                        ):(
                          <span>Delete</span>
                        )}
                      </button>
                    </div>

                    <button
                      onClick={() => handleDownload(item._id)}
                      className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-amber-600 transition duration-300"
                    >
                     {downloadID === item._id ? (
                      <FaSpinner className="animate-spin" />
                     ):(
                      <span className="flex items-center gap-2">Report<FaDownload/></span> 
                     )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No gallery items found.</p>
      )}

    {previewImage && (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-auto p-4">
        <div className="relative bg-white rounded shadow-lg max-w-3xl w-full mx-auto">
        {/* Close button */}
        <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-2 right-2 z-10 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
            Close
        </button>

        {/* Image Preview */}
        <div className="max-h-[80vh] overflow-y-auto p-4">
            <img
            src={previewImage}
            alt="Preview"
            className="w-full h-auto rounded object-contain"
            />
        </div>
        </div>
    </div>
    )}



      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Gallery</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleEditChange}
                placeholder="Title"
                className="w-full border p-2 rounded"
              />
              <input
                type="date"
                name="date"
                value={editData.date}
                onChange={handleEditChange}
                placeholder="Date"
                className="w-full border p-2 rounded"
              />
              <select
                name="type"
                value={editData.type}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
              >
                <option value="photo">Photo</option>
                <option value="video">Video</option>
                <option value="pdf">PDF</option>
              </select>
              <textarea
                name="summary"
                value={editData.summary}
                onChange={handleEditChange}
                placeholder="Event Summary"
                className="w-full border p-2 rounded"
              ></textarea>
              <textarea
                name="description"
                value={editData.description}
                onChange={handleEditChange}
                placeholder="Description"
                className="w-full border p-2 rounded"
              ></textarea>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-white"
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

export default GetAllGallery;
