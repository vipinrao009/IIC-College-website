import React from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../Context/baseUrl";

const Profile = () => {
  const {state,dispatch} = useGlobalContext()
  const navigate = useNavigate()
  const user = state.user;

  const handleLogOut = async(e)=>{
    e.preventDefault();
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      await axios.get(`${baseUrl}/api/v1/user/logout`)
      dispatch({ type: "LOGOUT", payload: false});
      localStorage.removeItem("auth", JSON.stringify({ user: "", token: ""}))
      toast.success("User logout successfully...")
      navigate("/")
    } catch (error) {
      toast.error("Failed to logout..");
    }
  }

  return (
   <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg max-w-2xl w-full overflow-hidden">
        {/* Profile Banner */}
        <div className="bg-blue-600 h-32"></div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-16">
          <img
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            src={user?.profileImage?.url}
            alt="Profile"
          />
        </div>

        {/* Details */}
        <div className="px-6 py-4 text-center">
          <h2 className="text-2xl font-bold text-blue-900">{user?.name}</h2>
          <p className="text-gray-600 text-sm">{user?.role?.toUpperCase()}</p>
          <p className="text-gray-700 mt-4">
            <strong>Email:</strong> {user?.email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> {user?.address}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Joined on {new Date(user?.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 p-4 border-t border-gray-200">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button onClick={handleLogOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
      </div>
   </Layout>
  );
};

export default Profile;
