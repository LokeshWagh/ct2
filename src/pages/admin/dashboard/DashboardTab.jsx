import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import myContext from "../../../context/data/myContext";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function DashboardTab() {
  const context = useContext(myContext);
  const {
    product,
    edithandle,
    deleteProduct,
    // order,
    user,
  } = context;

  const add = () => {
    // used the navigate
    window.location.href = "/addproduct";
  };

  return (
    <>
      <div className="container mx-auto p-4 bg-black text-white min-h-screen">
        <div className="tab container mx-auto">
          <Tabs defaultIndex={0} className=" ">
            <TabList className="md:flex md:space-x-8 from-gray-800 to-black grid grid-cols-2 text-center gap-4 md:justify-center mb-10 rounded-lg shadow-2xl p-4">
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-white rounded-lg text-xl shadow-[inset_0_0_8px_rgba(255,165,0,0.3)] px-5 py-1.5 text-center bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 tab-button"
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineProductionQuantityLimits />
                    Products
                  </div>{" "}
                </button>
              </Tab>
              {/* <Tab>
                <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ">
                  <div className="flex gap-2 items-center">
                    <AiFillShopping /> Order
                  </div>
                </button>
              </Tab> */}
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 border-green-500 text-white rounded-lg text-xl hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(255,165,0,0.3)] px-5 py-1.5 text-center bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 tab-button"
                >
                  <div className="flex gap-2 items-center">
                    <FaUser /> Users
                  </div>
                </button>
              </Tab>
            </TabList>
            {/* product  */}
            <TabPanel>
              <div className="px-4 md:px-0 mb-16 animate-fadeIn">
                <h1 className="text-center mb-5 text-3xl font-semibold underline text-white animate-pulse overflow-hidden">
                  Product Details
                </h1>
                <div className="flex justify-end mb-4">
                  <button
                    onClick={add}
                    type="button"
                    className="focus:outline-none text-white bg-gradient-to-r from-pink-600 to-orange-500 shadow-lg border hover:from-pink-700 hover:to-orange-600 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex gap-2 items-center">
                      Add Cattles <FaCartPlus size={20} />
                    </div>
                  </button>
                </div>
                <div className="relative overflow-x-auto rounded-lg shadow-2xl">
                  <table className="w-full text-sm text-left text-white bg-gradient-to-b from-gray-800 to-black">
                    <thead className="text-xs border border-gray-600 text-white uppercase bg-black shadow-[inset_0_0_8px_rgba(255,165,0,0.3)]">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.map((item, index) => {
                        const {
                          title,
                          price,
                          imageUrl,
                          category,
                          description,
                          date,
                        } = item;
                        return (
                          <tr
                            key={index}
                            className="border-b border-gray-600 hover:bg-[rgba(255,165,0,0.1)] transition-all duration-300 table-row"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <td className="px-6 py-4 text-white">
                              {index + 1}.
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-white whitespace-nowrap"
                            >
                              <img className="w-16 rounded-lg shadow-md" src={imageUrl} alt="img" />
                            </th>
                            <td className="px-6 py-4 text-white">{title}</td>
                            <td className="px-6 py-4 text-white">₹{price}</td>
                            <td className="px-6 py-4 text-white">
                              {category}
                            </td>
                            <td className="px-6 py-4 text-white">{date}</td>
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <div className="flex gap-2 cursor-pointer text-white">
                                  <div onClick={() => deleteProduct(item)} className="hover:text-red-400 transition-colors duration-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                      />
                                    </svg>
                                  </div>

                                  <Link to={"/updateproduct"}>
                                    <div onClick={() => edithandle(item)} className="hover:text-green-400 transition-colors duration-300">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabPanel>
            {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
            {/* this line is above 153 line */}
            {/* 
            <TabPanel>
              
              <div className="relative overflow-x-auto mb-16">
                <h1 className=' text-center mb-5 text-3xl font-semibold underline text-white animate-pulse'>Order Details</h1>

                {order.map((allorder,index)=>{
                  return(<table className="w-full text-sm text-left text-white bg-gradient-to-b from-gray-800 to-black">
                  <thead className="text-xs text-white uppercase bg-black shadow-[inset_0_0_8px_rgba(255,165,0,0.3)]">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allorder.cartItems.map((item,index)=>{
                      // console.log(allorder)
                      const {title,description,category,imageUrl,price} = item;
                      return(
                        <tr key={index} className="border-b border-gray-600 hover:bg-[rgba(255,165,0,0.1)] transition-all duration-300 table-row">
                          <td className="px-6 py-4 text-white">
                            {allorder.paymentId}
                          </td>
                          <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                            <img className='w-16 rounded-lg shadow-md' src={imageUrl} alt="img" />
                          </th>
                          <td className="px-6 py-4 text-white">
                            {title}
                          </td>
                          <td className="px-6 py-4 text-white">
                            ₹{price}
                          </td>
                          <td className="px-6 py-4 text-white">
                            {category}
                          </td>

                          <td className="px-6 py-4 text-white">
                            {allorder.addressInfo.name}
                          </td>
                          <td className="px-6 py-4 text-white">
                            {allorder.addressInfo.address}
                          </td>
                          <td className="px-6 py-4 text-white">
                          {allorder.addressInfo.pincode}
                          </td>
                          <td className="px-6 py-4 text-white">
                          {allorder.addressInfo.phoneNumber}
                          </td>
                          <td className="px-6 py-4 text-white">
                            {allorder.email}
                          </td>
                          <td className="px-6 py-4 text-white">
                            {allorder.date}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>)
                })}
              </div>
            </TabPanel> */}

            <TabPanel>
              <div className="relative overflow-x-auto mb-10 animate-fadeIn">
                <h1 className="text-center mb-5 text-3xl font-semibold underline text-white animate-pulse overflow-hidden">
                  User Details
                </h1>
                <table className="w-full text-sm text-left text-white bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-2xl">
                  <thead className="text-xs text-white uppercase bg-black shadow-[inset_0_0_8px_rgba(255,165,0,0.3)]">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Uid
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((item, index) => {
                      const { name, uid, email, date } = item;
                      return (
                        <tr
                          key={index}
                          className="border-b border-gray-600 hover:bg-[rgba(255,165,0,0.1)] transition-all duration-300 table-row"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <td className="px-6 py-4 text-white">
                            {index + 1}.
                          </td>
                          <td className="px-6 py-4 text-white">{name}</td>
                          <td className="px-6 py-4 text-white">{email}</td>
                          <td className="px-6 py-4 text-white">{uid}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
