import React from "react";

const ImageGallery = () => {
  // Static image paths
  const images = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
    "/images/event4.jpg",
    "/images/event5.jpg",
    "/images/event6.jpg",
    "/images/event7.jpg",
    "/images/event8.jpg",
    "/images/event9.jpg",
    "/images/event10.jpg",
  ];

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
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
