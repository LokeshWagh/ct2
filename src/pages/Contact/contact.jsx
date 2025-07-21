import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Img from "../../Video/contactUs.png";
import { Link } from "react-router-dom";
import "./contact.css";
import { toast } from "react-toastify";
import { FaSpinner } from 'react-icons/fa'; // For loading spinner

function Contact() {
  const [userData, setUserData] = useState({
    firstName: "",
    address: "",
    contact: "",
    email: "",
    cattle: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const { firstName, address, contact, email, cattle, message } = userData;

  const submitData = async (event) => {
    event.preventDefault();
    if (firstName === "" || address === "" || contact === "" || email === "") {
      return toast.error("Please fill in all required fields");
    }
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email");
    }
    if (!/^\d{10}$/.test(contact)) {
      return toast.error("Contact number must be 10 digits");
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://sellsproducts-9c8f5-default-rtdb.firebaseio.com/saleContact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            address,
            contact,
            email,
            cattle,
            message,
          }),
        }
      );

      if (res.ok) {
        setUserData({
          firstName: "",
          address: "",
          contact: "",
          email: "",
          cattle: "",
          message: "",
        });
        toast.success("Data Submitted Successfully!");
      } else {
        toast.error("Failed to submit data. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const context = useContext(myContext);
  // Removed 'mode' as it's no longer used

  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-black text-white min-h-screen animate-fadeIn">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={Img}
            alt="Contact Us"
            className="w-full md:w-3/4 rounded-xl "
          />
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-800 to-black shadow-2xl rounded-xl p-6 md:p-8 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 relative overflow-hidden">
            Contact Us
            <span className="block w-20 h-1 bg-gradient-to-r from-pink-600 to-orange-500 rounded mx-auto mt-2"></span>
          </h2>
          <form onSubmit={submitData} className="space-y-4">
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={postUserData}
              placeholder="First Name"
              className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:scale-105 transition-all duration-300 placeholder-gray-400 shadow-md"
            />
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={postUserData}
              placeholder="Address"
              className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:scale-105 transition-all duration-300 placeholder-gray-400 shadow-md"
            />
            <input
              type="text"
              name="contact"
              value={userData.contact}
              onChange={postUserData}
              placeholder="Contact Number"
              className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:scale-105 transition-all duration-300 placeholder-gray-400 shadow-md"
            />
            <input
              type="text"
              name="cattle"
              value={userData.cattle}
              onChange={postUserData}
              placeholder="Cattle"
              className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:scale-105 transition-all duration-300 placeholder-gray-400 shadow-md"
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={postUserData}
              placeholder="Email"
              className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:scale-105 transition-all duration-300 placeholder-gray-400 shadow-md"
            />
            <textarea
              name="message"
              value={userData.message}
              onChange={postUserData}
              placeholder="Message"
              className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg h-24 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:scale-105 transition-all duration-300 placeholder-gray-400 shadow-md"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white p-3 rounded-lg font-bold hover:from-pink-700 hover:to-orange-600 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              {loading ? <FaSpinner className="animate-spin mr-2" /> : 'Submit'}
            </button>

            <Link
              to={"/"}
              className="block text-center w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white p-3 rounded-lg font-bold hover:from-gray-700 hover:to-gray-900 hover:scale-105 transition-all duration-300 shadow-lg mt-4"
            >
              Move To Home
            </Link>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
