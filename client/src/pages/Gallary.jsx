import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../Context/baseUrl";

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [images, setImages] = useState([]);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const fetchGalleries = async () => {
    try {
      const { data } = await axiosInstance.get("/gallery/fetch", {
        withCredentials: true,
      });
      setImages(data.gallery || []);
    } catch (error) {
      toast.error("Failed to load galleries");
    }
  };

  useEffect(() => {
    console.log(images)
    fetchGalleries();
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">📸 Gallery</h1>
        <p className="text-gray-600 mt-2">
          A glimpse of our recent events and celebrations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {images.map((item, index) =>
          item.files.map((file, idx) => (
            <div
              key={`${index}-${idx}`}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={file.url}
                alt={`Event ${index + 1}`}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))
        )}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl bg-red-600 hover:bg-red-700 rounded-full px-4 py-2"
            onClick={closeModal}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl bg-gray-800 hover:bg-blue-600 rounded-full p-3"
            onClick={showPrevious}
          >
            &#8249;
          </button>

          <button
            className="absolute right-4 text-white text-4xl bg-gray-800 hover:bg-blue-600 rounded-full p-3"
            onClick={showNext}
          >
            &#8250;
          </button>

          <div className="relative max-w-4xl w-full mx-4">
            {images[selectedIndex]?.files?.[0] && (
              <img
                src={images[selectedIndex].files[0].url}
                alt={`Full-Screen Event ${selectedIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
