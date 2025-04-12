import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Context/baseUrl'
import { useGlobalContext } from '../../Context/GlobalContext'
import { toast } from 'react-toastify'
import { FaSpinner } from 'react-icons/fa';

const GetNotices = () => {
  const [allNotice, setAllNotice] = useState([])
  const { dispatch } = useGlobalContext();
  const [deletingId, setDeletingId] = useState(null);

  const fetchNotices = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const { data } = await axiosInstance.get("/notice/fetch");
      setAllNotice(data.notices);
      toast.success("Notice fetched successfully...");
    } catch (error) {
      toast.error("Failed to fetch notice..");
    }
  };

  

  const handleDelete = async(id)=>{
    try {
        setDeletingId(id)       
        const { data } = await axiosInstance.delete(`/notice/delete/${id}`)
        toast.success(data.message || "Notice deleted successfully");
        fetchNotices()
    } catch (error) {
        
    }
  }

  useEffect(() => {
    fetchNotices();
  }, [dispatch]);
  

  return (
    <div className="overflow-x-auto">
    {allNotice && allNotice.length > 0 ? (
      <table className="w-full border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Edit</th>
            
          </tr>
        </thead>
        <tbody>
          {allNotice.map((notice, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{notice.title}</td>
              <td className="border px-4 py-2">
                {new Date(notice.createdAt).toLocaleDateString()}
              </td>
              <td className="border py-2">
                <div className="flex justify-center gap-4">
                    <button  className="bg-blue-500 px-4 hover:bg-blue-700 transition-all duration-100 ease-in-out py-1 rounded-sm text-white">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(notice._id)} className="bg-red-500 px-4 hover:bg-red-600 transition-all duration-100 ease-in-out py-1 rounded-sm text-white">
                      {
                        deletingId === notice._id ? (
                            <FaSpinner className="animate-spin" />
                        ):(
                            'Delete'
                        )
                      }
                    </button>
                </div>
               </td>

            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No notices found</p>
    )}
  </div>
  

  )
}

export default GetNotices;
