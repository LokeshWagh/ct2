import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';
import "./ProductInfo.css";

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading, mode } = context;

    const [products, setProducts] = useState(null);
    const [isLiked, setIsLiked] = useState(false); // State to track if the "Like" button is clicked
    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            setProducts(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (products) => {
        dispatch(addToCart(products));
        toast.success('Added to Cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Toggle the "Like" button state
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Layout>
            <section
                className="text-gray-600 body-font overflow-hidden"
                style={{ background: mode === 'dark'
                    ? 'linear-gradient(180deg, rgb(46 49 55), black)'
                    : 'linear-gradient(180deg, #f4f4f4, #ffffff)', minHeight: '100vh' }}
            >
                <div className="container px-5 py-10 mx-auto">
                    {loading ? (
                        // Loader Component
                        <div className="flex justify-center items-center h-96">
                            <div
                                className={`animate-spin rounded-full h-16 w-16 border-t-4 border-opacity-75 ${
                                    mode === 'dark' ? 'border-pink-600' : 'border-pink-400'
                                }`}
                            ></div>
                        </div>
                    ) : products ? (
                        // Product Info Section
                        <div
                            className="lg:w-4/5 mx-auto flex flex-wrap bg-opacity-80 rounded-2xl shadow-xl p-6"
                            style={{
                                background: mode === 'dark'
                                    ? 'linear-gradient(180deg, rgb(46 49 55), black)'
                                    : 'linear-gradient(180deg, #f4f4f4, #ffffff)',
                                border: '2px solid transparent',
                                borderRadius:"10px",
                                borderImage: mode === 'dark'
                                    ? 'linear-gradient(45deg, #ff2d00, #ffb921, #f4d4d4) 1'
                                    : 'linear-gradient(45deg, #ff6f61, #ffd700, #d3d3d3) 1',
                                    
                            }}
                        >
                            {/* Image Section */}
                            <div className="lg:w-1/3 w-full lg:h-auto rounded-lg overflow-hidden">
                                <img
                                    alt={products.title}
                                    className="w-full h-80 object-cover object-center bg-white border-2 border-white rounded-[5px] transition-all duration-500"
                                    src={products.imageUrl}
                                />
                            </div>

                            {/* Product Details Section */}
                            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2
                                    className="text-sm title-font tracking-widest"
                                    style={{ color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)' }}
                                >
                                    Cattle_Name
                                </h2>
                                <h1
                                    className="text-3xl title-font font-medium mb-2 overflow-hidden animate-fadeIn"
                                    style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}
                                >
                                    {products.title}
                                </h1>

                                {/* Rating and Social Links */}
                                <div className="flex mb-4 items-center">
                                    <span className="flex items-center">
                                        {[...Array(4)].map((_, i) => (
                                            <svg
                                                key={i}
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className={`w-4 h-4 ${
                                                    mode === 'dark' ? 'text-pink-500' : 'text-pink-400'
                                                }`}
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className={`w-4 h-4 ${
                                                mode === 'dark' ? 'text-pink-500' : 'text-pink-400'
                                            }`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span
                                            className="ml-3"
                                            style={{ color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)' }}
                                        >
                                            4 Reviews
                                        </span>
                                    </span>
                                    <span className="flex ml-auto space-x-3">
                                        <a
                                            href="https://www.instagram.com/lokeshwagh34/"
                                            className="transition-colors duration-300"
                                            style={{
                                                color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)',
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = mode === 'dark' ? 'rgb(236 72 153)' : 'rgb(244 114 182)')
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)')
                                            }
                                        >
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
                                        <a
                                            href="https://www.linkedin.com/in/lokesh-wagh-bab067228/"
                                            className="transition-colors duration-300"
                                            style={{
                                                color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)',
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = mode === 'dark' ? 'rgb(236 72 153)' : 'rgb(244 114 182)')
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)')
                                            }
                                        >
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
                                            href="mailto:lokeshwagh675@gmail.com"
                                            className="transition-colors duration-300"
                                            style={{
                                                color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)',
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = mode === 'dark' ? 'rgb(236 72 153)' : 'rgb(244 114 182)')
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)')
                                            }
                                        >
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>

                                {/* Description */}
                                <p
                                    className="leading-relaxed border-b-2 mb-5 pb-5"
                                    style={{
                                        color: mode === 'dark' ? 'rgb(209 213 219)' : 'rgb(75 85 99)',
                                        borderColor: mode === 'dark' ? 'rgb(75 85 99)' : 'rgb(229 231 235)',
                                    }}
                                >
                                    {products.description}
                                </p>

                                {/* Price and Actions */}
                                <div className="flex items-center">
                                    <span
                                        className="title-font font-medium text-2xl"
                                        style={{ color: mode === 'dark' ? 'rgb(236 72 153)' : 'rgb(244 114 182)' }}
                                    >
                                        ₹{products.price}
                                    </span>
                                    <button
                                        onClick={() => addCart(products)}
                                        className="ml-auto relative text-white font-medium rounded-lg py-2 px-6 overflow-hidden bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 focus:ring-4 focus:ring-pink-300 transition-all duration-300"
                                    >
                                        <Link to="/cart"><span className="relative z-10">Add to Cart</span></Link>
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                    <button
                                        onClick={handleLikeClick}
                                        className={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center transition-colors duration-300 ml-4 ${
                                            isLiked
                                                ? 'bg-pink-500 text-white'
                                                : mode === 'dark'
                                                ? 'bg-gray-700 text-gray-300 hover:text-pink-500'
                                                : 'bg-gray-200 text-gray-500 hover:text-pink-400'
                                        }`}
                                    >
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Error/No Product Found
                        <div
                            className="text-center py-20"
                            style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}
                        >
                            <h2 className="text-2xl font-medium">Product Not Found</h2>
                            <p
                                className="mt-2"
                                style={{ color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)' }}
                            >
                                The product you're looking for does not exist.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;