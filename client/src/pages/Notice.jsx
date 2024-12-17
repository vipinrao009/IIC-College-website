import React from "react";
import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";

const NoticeBoard = () => {
  // Static notice data
  const notices = [
    {
      id: 1,
      title: "Workshop on Web Development",
      description:
        "Join us for a hands-on workshop on full-stack web development covering React, Node.js, and MongoDB.",
      date: "August 25, 2024",
    },
    {
      id: 2,
      title: "Holiday Announcement",
      description:
        "The institution will remain closed on 15th August in observance of Independence Day celebrations.",
      date: "August 15, 2024",
    },
    {
      id: 3,
      title: "Coding Club Registration",
      description:
        "Registrations for the new Coding Club batch are now open. Last date to register: 30th August.",
      date: "August 30, 2024",
    },
    {
      id: 4,
      title: "Seminar on Artificial Intelligence",
      description:
        "Attend our exclusive seminar on the future of AI in technology and education.",
      date: "September 5, 2024",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">📋 Upcoming Events</h1>
          <p className="text-gray-600 mt-2">
            Stay updated with the latest announcements and events.
          </p>
        </div>

        {/* Notices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Notice Header */}
              <div className="bg-blue-600 text-white flex items-center p-4">
                <FaBullhorn className="text-2xl mr-2" />
                <h2 className="text-lg font-semibold">{notice.title}</h2>
              </div>

              {/* Notice Body */}
              <div className="p-4">
                <p className="text-gray-700 mb-4">{notice.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <FaCalendarAlt className="mr-2" />
                  <span>{notice.date}</span>
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
