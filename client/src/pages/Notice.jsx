import React, { useEffect, useState } from "react";
import { FaBullhorn, FaCalendarAlt, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import axiosInstance from "../Context/baseUrl";
import { toast } from "react-toastify";

const NoticeBoard = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const { data } = await axiosInstance.get("/event/get-event");
      setEvents(data.events);
    } catch (error) {
      toast.error("Failed to fetch events.");
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">📋 Upcoming Events</h1>
          <p className="text-gray-600 font-medium mt-2">
            Stay updated with the latest announcements and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-between"
            >
              {/* Header */}
              <div className="bg-blue-600 text-white p-4 rounded-t-xl flex items-center">
                <FaBullhorn className="text-xl mr-2" />
                <h2 className="text-lg font-semibold">{event.title}</h2>
              </div>

              {/* Body */}
              <div className="p-4 bg-gradient-to-br from-blue-100 to-white py-2 flex flex-col flex-grow justify-between">
                <p className="text-gray-700 mb-3">{event.description}</p>

                <div className="text-sm flex justify-between space-y-2">
                  <div className="flex items-center text-blue-600 font-medium">
                    <FaCalendarAlt className="mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>

                  {event.location && (
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="mr-2 text-red-500" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
