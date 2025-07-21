import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";

function Footer() {
  const context = useContext(myContext);
  // Removed 'mode' as it's no longer used

  return (
    <div>
      <footer className="text-white body-font bg-black relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-pink-400 transition-all duration-300">Home</a>
                </li>
                <li>
                  <a className="text-white hover:text-pink-400 transition-all duration-300">Order</a>
                </li>
                <li>
                  <a className="text-white hover:text-pink-400 transition-all duration-300">
                    Local For Vocal
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-pink-400 transition-all duration-300">Cart</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                Customer Service
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/returnpolicy"}
                    className="text-white hover:text-pink-400 transition-all duration-300"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-white hover:text-pink-400 transition-all duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-white hover:text-pink-400 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/privacypolicy"}
                    className="text-white hover:text-pink-400 transition-all duration-300"
                  >
                    Privacy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="Payment Methods" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-gray-800 to-black">
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to={"/"} className="flex">
              <div className="flex">
                <h1 className="text-2xl font-bold text-white px-2 py-1 rounded hover:text-pink-400 transition-all duration-300">
                  Live_Stock
                </h1>
              </div>
            </Link>
            <p className="text-sm text-gray-300 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Live_Stock —
              <a
                href=""
                rel="noopener noreferrer"
                className="text-gray-300 ml-1 hover:text-pink-400 transition-all duration-300"
                target="_blank"
              >
                www.Live_Stock.com
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300" href="">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300" href="">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                className="ml-3 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                href="https://www.instagram.com/lokeshwagh34/"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a
                className="ml-3 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                href="https://www.linkedin.com/in/lokesh-wagh-bab067228/"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
