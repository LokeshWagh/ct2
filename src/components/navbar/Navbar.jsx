import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import image from '../../Video/ind-r.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  };

  return (
    <div
      className="backdrop-blur-md bg-opacity-50 sticky top-0 z-50"
      style={{
        background: 'linear-gradient(180deg, rgb(126 126 126), black, black)',
        borderRadius: '0 0 10px 10px'
      }}
    >
      {/* Mobile: Hamburger menu and sidebar */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-transparent bg-opacity-50 pb-12 shadow-xl"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-[#C0C0C0] bg-transparent bg-opacity-50"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    onClick={() => setOpen(false)}
                  >
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link to="/allproducts" className="-m-2 block p-2 font-medium text-white">
                    All Products
                  </Link>
                  <Link to="/blogs" className="-m-2 block p-2 font-medium text-white">
                    Blogs
                  </Link>
                  {user?.user?.email === 'lokeshwagh512@gmail.com' && (
                    <div className="flow-root">
                      <Link to="/dashboard" className="-m-2 block p-2 font-medium text-white">
                        Admin
                      </Link>
                    </div>
                  )}
                  {user ? (
                    <div className="flow-root">
                      <Link to="/Contactus" className="-m-2 block p-2 font-medium text-white">
                        SellsProduct
                      </Link>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link to="/login" className="-m-2 block p-2 font-medium text-white">
                        Login
                      </Link>
                    </div>
                  )}
                  {user ? (
                    <div className="flow-root">
                      <a onClick={logout} className="-m-2 block p-2 font-medium text-white cursor-pointer">
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link to="/signup" className="-m-2 block p-2 font-medium text-white cursor-pointer">
                        Signup
                      </Link>
                    </div>
                  )}
                  <div className="flow-root">
                    <a
                      href="https://www.linkedin.com/in/lokesh-wagh-bab067228/"
                      className="-m-2 block p-2 font-medium text-white cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Owner"
                      />
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="https://quizonhistoryofindia.netlify.app/" className="-m-2 flex items-center p-2">
                    <img src={image} alt="India" className="block h-auto w-5 flex-shrink-0" />
                    <span className="ml-3 block text-base font-medium text-white">INDIA</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Shared: Header wrapper */}
      <header className="relative bg-transparent bg-opacity-50">
        <nav
          aria-label="Top"
          className="bg-transparent bg-opacity-50 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="flex h-16 items-center">
            {/* Mobile: Hamburger button */}
            <button
              type="button"
              className="rounded-md bg-transparent bg-opacity-50 p-2 text-[#C0C0C0] lg:hidden"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Shared: Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to="/" className="flex">
                <h1 className="text-2xl lg:text-3xl font-bold text-white px-2 py-1 rounded">
                  Live_Stock
                </h1>
              </Link>
            </div>

            {/* Shared: Right-side content */}
            <div className="ml-auto flex items-center">
              {/* Desktop: Navigation links */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? (
                  <Link to="/Home" className="text-sm lg:text-lg font-medium text-white" />
                ) : (
                  <Link to="/signup" className="text-sm lg:text-lg font-medium text-white">
                    Signup
                  </Link>
                )}
                <Link to="/allproducts" className="text-sm lg:text-lg font-medium text-white">
                  All Products
                </Link>
                {user ? (
                  <div className="flow-root">
                    <Link to="/Contactus" className="text-sm lg:text-lg font-medium text-white">
                      SellsProduct
                    </Link>
                  </div>
                ) : (
                  <Link to="/login" className="text-sm lg:text-lg font-medium text-white">
                    Login
                  </Link>
                )}
                <Link to="/blogs" className="text-sm lg:text-lg font-medium text-white">
                  Blogs
                </Link>
                {user?.user?.email === 'lokeshwagh512@gmail.com' && (
                  <Link to="/dashboard" className="text-sm lg:text-lg font-medium text-white">
                    Admin
                  </Link>
                )}
                {user && (
                  <a onClick={logout} className="text-sm lg:text-lg font-medium text-white cursor-pointer">
                    Logout
                  </a>
                )}
              </div>

              {/* Desktop: INDIA link */}
              <div className="hidden lg:ml-8 lg:flex">
                <a href="https://quizonhistoryofindia.netlify.app/" className="flex items-center text-white">
                  <img src={image} alt="" className="block h-auto w-5 flex-shrink-0" />
                  <span className="ml-3 block text-base lg:text-lg font-medium">INDIA</span>
                </a>
              </div>

              {/* Desktop: LinkedIn profile */}
              <div className="hidden lg:ml-8 lg:flex">
                <a href="https://www.linkedin.com/in/lokesh-wagh-bab067228/" className="flex items-center text-white">
                  <img
                    className="inline-block w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Lokesh"
                  />
                </a>
              </div>

              {/* Shared: Cart link */}
              <div className="ml-4 flow-root lg:ml-6 overflow-hidden">
                <Link to="/cart" className="group -m-2 flex items-center p-2" style={{ color: 'white' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
