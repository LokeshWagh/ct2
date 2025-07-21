import React from 'react';
import { Link } from 'react-router-dom';
import './nopage.css'; // If you have custom CSS, keep this; otherwise, remove and use inline styles

function NoPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="text-center max-w-lg animate-fadeIn">
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 animate-pulse overflow-hidden">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-20 blur-3xl rounded-full"></div> {/* Glow effect */}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold mt-4 overflow-hidden">
          Looks like you're lost
        </h3>
        <p className="text-gray-300 mt-2 mb-6">
          The page you are looking for is not available!
        </p>
        <Link
          to={'/'}
          className="inline-block px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-pink-600 to-orange-500 rounded-lg shadow-lg hover:from-pink-700 hover:to-orange-600 hover:scale-105 transition-all duration-300"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default NoPage;
