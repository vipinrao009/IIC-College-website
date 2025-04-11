import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/Logo.png";
import { useGlobalContext } from "../Context/GlobalContext";
import axios from "axios"
import baseUrl from "../Context/baseUrl.js"

const Login = () => {
  const {dispatch,state} = useGlobalContext()
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  
  function handleInput (e){
    const {name, value} = e.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const handleLogin = async(e)=>{
    e.preventDefault();
   
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const { data } = await axios.post(`${baseUrl}/api/v1/user/login`,{...loginData})

      dispatch({ type: "SET_USER", payload: data.user})

      localStorage.setItem("auth", JSON.stringify({ user: data.user, token: data.token}))

      navigate("/");

    } catch (error) {
      alert("Login failed. Check your credentials.");
    }

  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-orange-100">
        <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Logo Section */}
       <div className=" flex items-center justify-center bg-orange-200">
          <img src={logo} alt="iet_logo" className=" h-auto object-contain" />
        </div>

        {/* Login Form */}
        <div className="bg-white p-10 rounded shadow-md w-full max-w-md">
          <h1 className="text-center pb-6 text-2xl font-bold">Login</h1>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
              name="email"
              value={loginData.email}
              onChange={handleInput}
            />

            {/* Password Input */}
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                name="password"
                value={loginData.password}
                onChange={handleInput}
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {/* Add an eye icon here if needed */}
              </button>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link
                onClick={openModal}
                className="text-blue-500 font-semibold hover:text-blue-600"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                className="text-blue-500 font-semibold hover:text-blue-600"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>

        {/* Modal for Forgot Password */}
        {modalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <h3 className="text-lg font-bold mb-4">Forgot Password</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </Layout>
  );
};

export default Login;