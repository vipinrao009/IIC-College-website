import React from 'react';

function NoticeBar() {
  const notices = [
    "First Statutes 1977 (2020-21)",
    "D.Lit.-Ph.D. Award List for 88th Convocation",
    "Vision Document-Notice",
    "EC Members Notification 10.01.2024"
  ];

  return (
    <div className="w-full flex col-span-2 mt-5 border border-red-300 bg-gray-100 shadow-md">
      <div className="flex justify-start items-center">
        <h2 className="font-bold text-white border border-red-300 bg-red-600 px-3 py-1">
          RECENT NOTICES
        </h2>
      </div>

      {/* Scrollable Container with auto-scrolling animation */}
      <div className="mt-4 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          {notices.map((notice, index) => (
            <span key={index} className="inline-block text-lg text-gray-800 mx-4">
              • {notice}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoticeBar;
