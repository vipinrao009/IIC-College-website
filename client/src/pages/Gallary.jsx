import React, { useState } from "react";
import e1 from "./Gallery/Event (1).jpg";
import e2 from "./Gallery/Event (2).jpg";
import e3 from "./Gallery/Event (3).jpg";
import e4 from "./Gallery/Event (4).jpg";
import e5 from "./Gallery/Event (5).jpg";
import e6 from "./Gallery/Event (6).jpg";
import e7 from "./Gallery/Event (7).jpg";
import e8 from "./Gallery/Event (8).jpg";
import e9 from "./Gallery/Event (9).jpg";
import e10 from "./Gallery/Event (10).jpg";

const ImageGallery = () => {
 
  const images = [e1, e2, e3, e4, e5, e6, e7, e8];

  // State for the selected image index
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open modal with selected index
  const openModal = (index) => {
    setSelectedIndex(index);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedIndex(null);
  };

  // Show next image
  const showNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Show previous image
  const showPrevious = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-gray-50 py-10">
      {/* Gallery Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">📸 Gallery</h1>
        <p className="text-gray-600 mt-2">A glimpse of our recent events and celebrations</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-gray-800 rounded-full px-4 py-2 hover:bg-red-600"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 text-white text-4xl bg-gray-800 rounded-full p-4 hover:bg-blue-600"
            onClick={showPrevious}
          >
            &#8249;
          </button>

          <button
            className="absolute right-4 text-white text-4xl bg-gray-800 rounded-full p-4 hover:bg-blue-600"
            onClick={showNext}
          >
            &#8250;
          </button>

          {/* Selected Image */}
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={images[selectedIndex]}
              alt={`Full-Screen Event ${selectedIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform scale-100 duration-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
