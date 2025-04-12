import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Context/baseUrl'
import { useGlobalContext } from '../../Context/GlobalContext'
import { toast } from 'react-toastify'
import { FaSpinner } from 'react-icons/fa';

const GetNotices = () => {
  const [allNotice, setAllNotice] = useState([])
  const { dispatch } = useGlobalContext();
  const [deletingId, setDeletingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);


  const fetchNotices = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const { data } = await axiosInstance.get("/notice/fetch");
      setAllNotice(data.notices);
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
            <th className="border py-2">Action</th>
            
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
                    <button  
                        className="bg-blue-500 px-4 hover:bg-blue-700 transition-all duration-100 ease-in-out py-1 rounded-sm text-white"
                        onClick={()=>{
                          setSelectedNotice(notice);
                          setShowModal(true);
                        }}
                    >
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

    {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">Edit Notice</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                await axiosInstance.put(`/notice/update/${selectedNotice._id}`, selectedNotice);
                toast.success("Notice updated successfully");
                setShowModal(false);
                fetchNotices()
              } catch (error) {
                toast.error("Update failed");
              }
            }}
          >
            <input
              type="text"
              value={selectedNotice.title}
              onChange={(e) =>
                setSelectedNotice({ ...selectedNotice, title: e.target.value })
              }
              className="w-full border p-2 mb-4"
            />
            {/* <input
              type="text"
              value={selectedNotice.link}
              onChange={(e) =>
                setSelectedNotice({ ...selectedNotice, link: e.target.value })
              }
              className="w-full border p-2 mb-4"
            /> */}
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )}

  </div>
  )
}

export default GetNotices;
