import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../Context/baseUrl";

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [flatImages, setFlatImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showNext = () => {
    setSelectedIndex((prev) => (prev + 1) % flatImages.length);
  };
  const showPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + flatImages.length) % flatImages.length);
  };

  const fetchGalleries = async () => {
    try {
      const { data } = await axiosInstance.get("/gallery/fetch", {
        withCredentials: true,
      });
      // Flatten all file urls from gallery
      const flattened = (data.gallery || []).flatMap(item =>
        item.files.map(file => ({ url: file.url }))
      );
      setFlatImages(flattened);
    } catch (error) {
      toast.error("Failed to load galleries");
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleImages = flatImages.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-50 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📸 Gallery</h1>
        <p className="text-gray-600 font-semibold mt-2">
          A glimpse of our recent events and celebrations
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {visibleImages.map((file, index) => (
          <div
            key={startIndex + index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openModal(startIndex + index)}
          >
            <img
              src={file.url}
              alt={`Event ${startIndex + index + 1}`}
              className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium mt-1">
          Page {currentPage} of {Math.ceil(flatImages.length / itemsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(flatImages.length / itemsPerPage) ? prev + 1 : prev
            )
          }
          disabled={endIndex >= flatImages.length}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Full-Screen Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white text-3xl bg-red-600 hover:bg-red-700 rounded-full px-4 py-2"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white text-4xl bg-gray-800 hover:bg-blue-600 rounded-full p-3"
            onClick={showPrevious}
          >
            &#8249;
          </button>

          {/* Next */}
          <button
            className="absolute right-4 text-white text-4xl bg-gray-800 hover:bg-blue-600 rounded-full p-3"
            onClick={showNext}
          >
            &#8250;
          </button>

          {/* Image */}
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={flatImages[selectedIndex]?.url}
              alt={`Full-Screen Event ${selectedIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
