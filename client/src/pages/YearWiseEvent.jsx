import React, { useEffect, useState } from 'react';
import { Tabs, Spin } from 'antd';
import Layout from '../Layout/Layout';
import axiosInstance from '../Context/baseUrl';
import { useParams } from 'react-router-dom';

const YearWiseEvent = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeYear, setActiveYear] = useState('2025'); // default tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [activeEventFiles, setActiveEventFiles] = useState([]);
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [PreviewDetails, setPreviewDetails] = useState(null)
  const { clubName } = useParams();

  const tabPosition = window.innerWidth < 768 ? "top" : "left";

  const fetchGalleriesByYear = async (year) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get("/gallery/fetch",{params: { club: clubName, year }});
      setGalleries(data.gallery || []);
    } catch (error) {
      setGalleries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchGalleriesByYear(activeYear);
  }, [activeYear,clubName]);

  const handleTabChange = (key) => {
    setActiveYear(key);
  };

  const years = ['2025','2024', '2023',];

  // Flatten files from all events and attach meta info
  const paginatedGalleries = galleries.flatMap((event) =>
    event.files?.map((file, index) => ({
      ...file,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      id: `${event._id}-${index}`,
    })) || []
  );

  const totalPages = Math.ceil(paginatedGalleries.length / itemsPerPage);
  const paginatedData = paginatedGalleries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Year-wise Events</h2>
        <Tabs
        tabPosition={tabPosition}
        defaultActiveKey={activeYear}
        onChange={handleTabChange}
        items={years.map((year) => ({
            key: year,
            label: (
            <span className="font-medium text-lg text-gray-700 hover:text-blue-600">
                {year}
            </span>
            ),
            children: loading ? (
            <div className="flex justify-center py-10">
                <Spin size="large" />
            </div>
            ) : paginatedGalleries.length === 0 ? (
            <p className="text-gray-500 text-center">No events for {year}</p>
            ) : (
            <div className="grid grid-cols-1 p-3 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {galleries.map((event) => {
                  if (!event.files || event.files.length === 0) return null;
                  return (
                    <div
                      key={event._id}
                      className="rounded-lg overflow-hidden border border-gray-300 bg-white shadow-sm"
                    >
                      <img
                        src={event.files[0].url}
                        alt={event.title}
                        onClick={() => {
                          setActiveEventFiles(event.files);
                          setPreviewDetails(event)
                          setActiveFileIndex(0);
                        }}
                        className="w-96 md:w-72 h-48 object-cover cursor-pointer"
                      />
                      <div className="p-2 bg-sky-200">
                        <h3 className="text-lg text-center font-semibold">{event.title}</h3>
                      </div>
                    </div>
                  );
                })}
            </div>
            ),
        }))}
        className="bg-white shadow-md rounded"
        />

        {/* {paginatedGalleries.length > 0 && (
        <div className="flex justify-center mt-6 gap-4">
            <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
            Previous
            </button>
            <span className="text-gray-600">
            Page {currentPage} of {totalPages}
            </span>
            <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
            Next
            </button>
        </div>
        )} */}

        {activeEventFiles.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-auto">
            <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col items-center p-6">

              {/* Close Button */}
              <button
                onClick={() => {
                  setActiveEventFiles([]);
                  setActiveFileIndex(0);
                }}
                className="absolute top-3 right-3 z-10 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Close
              </button>

              {/* Previous Button */}
              <button
                onClick={() => setActiveFileIndex((prev) => Math.max(prev - 1, 0))}
                disabled={activeFileIndex === 0}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white px-3 py-2 rounded-full disabled:bg-gray-300"
              >
                &#8592;
              </button>

              {/* Image Preview */}
              <img
                src={activeEventFiles[activeFileIndex].url}
                alt="Preview"
                className="max-h-[70vh] w-auto object-contain rounded mb-4"
              />

              {/* Event Info Section */}
              <div className="w-full text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{PreviewDetails.title}</h2>
                <p className="text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4 mb-4">
                  {PreviewDetails.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Date:</span>
                    <span>
                      {new Date(PreviewDetails.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.343L10.586 12l-4.243 4.243" />
                    </svg>
                    <span className="font-medium">Location:</span>
                    <span>{PreviewDetails.location}</span>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setActiveFileIndex((prev) =>
                    Math.min(prev + 1, activeEventFiles.length - 1)
                  )
                }
                disabled={activeFileIndex === activeEventFiles.length - 1}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white px-3 py-2 rounded-full disabled:bg-gray-300"
              >
                &#8594;
              </button>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default YearWiseEvent;
