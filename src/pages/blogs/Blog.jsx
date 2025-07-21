// src/pages/Home.js
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';
import { cows } from '../../Data/cows.js';
import { FaArrowRight } from 'react-icons/fa'; // Icon for link button

import "../../App.css";

function Blog() {
  const context = useContext(myContext);
  // Removed 'mode' as it's no longer used

  return (
    <Layout>
      <div className="bg-black text-white min-h-screen">
        <div className="text-center overflow-hidden">
          <h1 className="text-6xl pt-10 pb-10 font-bold title-gradient animate-pulse relative overflow-hidden">
            Cattles Blogs
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block w-20 h-1 bg-gradient-to-r from-pink-600 to-orange-500 rounded "></span>
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 overflow-hidden">
            {cows.map((cow, index) => (
              <div
                key={cow.id}
                className="bg-gradient-to-b from-gray-800 to-black rounded-xl shadow-2xl overflow-hidden  "
                style={{ animationDelay: `${index * 0.3}s` }} // Staggered animation
              >
                <div className="relative w-full h-[200px] overflow-hidden"> {/* Fixed size container */}
                  <img
                    src={cow.image}
                    alt={cow.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" // object-cover to fill fixed size
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-2 text-white">{cow.name}</h1>
                  <p className="text-lg text-gray-300 mb-1">{cow.subTitle}</p>
                  <p className="text-sm text-gray-400 mb-3">Written by: {cow.writer}</p>
                  <p className="text-base text-gray-200 mb-4 line-clamp-3">{cow.description}</p>
                  <Link
                    to={`/cow/${cow.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-lg font-semibold hover:from-pink-700 hover:to-orange-600 hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    Continue Reading <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
