import React, { useEffect, useState } from 'react';
import { Tabs, Spin } from 'antd';
import Layout from '../Layout/Layout';
import axiosInstance from '../Context/baseUrl';
import { toast } from 'react-toastify';

const YearWiseEvent = () => {
  const [tabPosition] = useState('left');
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeYear, setActiveYear] = useState('2024'); // default tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [previewImage, setPreviewImage] = useState(null);

  const fetchGalleriesByYear = async (year) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`/gallery/fetch?year=${year}`, {
        withCredentials: true,
      });
      setGalleries(data.gallery || []);
    } catch (error) {
      setGalleries([]);
      toast.error('Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1); // Reset page when year changes
    fetchGalleriesByYear(activeYear);
  }, [activeYear]);

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
      year: event.year,
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {paginatedData.map((file) => (
                <div
                    key={file.id}
                    className="rounded-lg overflow-hidden border border-gray-300 bg-white shadow-sm"
                >
                    <img
                    src={file.url}
                    alt={file.filename}
                    onClick={()=>setPreviewImage(file.url)}
                    className="w-72 h-48 object-cover cursor-pointer"
                    />
                    <div className="p-2">
                    <p className="font-semibold text-sm text-blue-700">{file.title}</p>
                    </div>
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

      </div>
    </Layout>
  );
};

export default YearWiseEvent;
