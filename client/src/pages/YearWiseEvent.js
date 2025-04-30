import React, { useEffect, useState } from 'react';
import { Tabs, Spin } from 'antd';
import Layout from '../Layout/Layout';
import axiosInstance from '../Context/baseUrl';
import { useParams } from 'react-router-dom';

const YearWiseEvent = () => {
  const [tabPosition] = useState('left');
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeYear, setActiveYear] = useState('2024'); // default tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [previewImage, setPreviewImage] = useState(null);
  const { clubName } = useParams();
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
    setCurrentPage(1); // Reset page when year changes
    fetchGalleriesByYear(activeYear);
  }, [activeYear,clubName]);

  const handleTabChange = (key) => {
    setActiveYear(key);
  };

  const years = ['2024', '2023', '2022']; // Add more years if needed

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
                {paginatedData.map((file) => (
                <div
                    key={file.id}
                    className="rounded-lg overflow-hidden border border-gray-300 bg-white shadow-sm"
                >
                    <img
                    src={file.url}
                    alt={file.filename}
                    onClick={()=>setPreviewImage(file)}
                    className="w-72 h-48 object-cover cursor-pointer"
                    />
                </div>
                ))}
            </div>
            ),
        }))}
        className="bg-white shadow-md rounded"
        />

        {paginatedGalleries.length > 0 && (
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
                <div className="max-h-[85vh] overflow-y-auto p-6 bg-white rounded-3xl shadow-2xl border border-gray-100">

                {/* Image Section */}
                <div className="w-full rounded-2xl overflow-hidden shadow-md mb-6">
                  <img
                    src={previewImage.url}
                    alt={previewImage.title || "Event Preview"}
                    className="w-full h-[60vh] object-contain bg-gray-100"
                  />
                </div>

                {/* Info Section */}
                <div className="space-y-4 px-2 sm:px-4">
                  <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
                    {previewImage.title}
                  </h1>

                  <p className="text-gray-600 text-base leading-relaxed border-l-4 border-blue-500 pl-4">
                    {previewImage.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Date:</span>
                      <span>
                        {new Date(previewImage.date).toLocaleDateString("en-GB", {
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
                      <span>{previewImage.location}</span>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            </div>
        )}

      </div>
    </Layout>
  );
};

export default YearWiseEvent;
