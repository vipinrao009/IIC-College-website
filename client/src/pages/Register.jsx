import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";

const Register = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-orange-100">
        {/* Container Div for Equal Layout */}
        <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Logo Section */}
          <div className=" flex items-center justify-center bg-orange-200">
            <img src={logo} alt="iet_logo" className=" h-auto object-contain" />
          </div>

          {/* Register Form */}
          <div className="w-1/2 p-10">
            <h1 className="text-center pb-6 text-2xl font-bold">Register</h1>
            <form>
              {/* Name Input */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
              />

              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
              />

              {/* Confirm Password Input */}
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
              />

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
              >
                Register
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-blue-500 font-semibold hover:text-blue-600"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
