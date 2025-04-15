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

  const fetchGalleriesByYear = async (year) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`/gallery/fetch?year=${year}`, {
        withCredentials: true,
      });
      setGalleries(data.gallery || []);
    } catch (error) {
      toast.error('Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleriesByYear(activeYear);
  }, [activeYear]);

  const handleTabChange = (key) => {
    setActiveYear(key);
  };

  const years = ['2024', '2023', '2022']; // add more years if needed

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
            ) : galleries.length === 0 ? (
              <p className="text-gray-500 text-center">No events for {year}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleries.map((event) => (
                   <>
                    {event.files?.length > 0 && (
                        <>
                        {event.files.map((file, index) => (
                          <div
                            key={index}
                            className="rounded-lg overflow-hidden border border-gray-300 bg-white shadow-sm"
                          >
                            <img
                              src={file.url}
                              alt={file.filename}
                              className="w-72 h-48 object-cover cursor-pointer"
                            />
                          </div>
                        ))}
                        </>
                    )}
                   </>
                ))}
              </div>
            ),
          }))}
          className="bg-white shadow-md rounded"
        />
      </div>
    </Layout>
  );
};

export default YearWiseEvent;
