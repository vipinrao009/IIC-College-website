import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context/GlobalContext';
import axiosInstance from '../Context/baseUrl';
import { toast } from 'react-toastify';

function NoticeBar() {
  const [notices, setAllNotice] = useState([])
  const {dispatch} = useGlobalContext()

  const fetchNotices = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data } = await axiosInstance.get("/notice/fetch");
      setAllNotice(data.notices);
    } catch (error) {
      toast.error("Failed to fetch notice..");
    }
  };

  useEffect(()=>{
    fetchNotices()
  },[])

  return (
    <div className="w-full flex col-span-2 mt-7 border border-red-300 bg-gray-100 shadow-md">
      <div className="flex justify-start items-center">
        <h2 className="font-bold text-white border border-red-300 bg-red-600 px-3 py-1">
          RECENT NOTICES
        </h2>
      </div>

      {/* Scrollable Auto-Marquee Container */}
        <div className="overflow-hidden py-3 relative">
          <div className="whitespace-nowrap animate-marquee px-4">
            {notices?.map((notice, index) => (
              <span key={index} className="inline-block text-base text-gray-800 mx-6">
                • {notice.title}
              </span>
            ))}
          </div>
        </div>
    </div>

  );
}

export default NoticeBar;
