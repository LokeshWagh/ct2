import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
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
    const { loading, setLoading } = context; // Removed 'mode'

    const [products, setProducts] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [quantity, setQuantity] = useState(1); // Quantity state
    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            if (productTemp.exists()) {
                setProducts(productTemp.data());
            } else {
                toast.error("Product not found");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error("Error fetching product");
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (products) => {
        dispatch(addToCart({ ...products, quantity })); // Include quantity
        toast.success('Added to Cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Toggle the "Like" button state
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    // Adjust quantity
    const adjustQuantity = (change) => {
        setQuantity((prev) => Math.max(1, prev + change));
    };

    return (
        <Layout>
            <section className="text-white body-font overflow-hidden bg-black min-h-screen">
                <div className="container px-5 py-10 mx-auto overflow-hidden">
                    {loading ? (
                        // Loader Component
                        <div className="flex justify-center items-center h-96">
                            <div
                                className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-600 border-opacity-75"
                            ></div>
                        </div>
                    ) : products ? (
                        // Product Info Section
                        <div
                            className="lg:w-4/5 mx-auto flex flex-wrap bg-gradient-to-b from-gray-800 to-black rounded-2xl shadow-2xl p-6 animate-fadeIn glow-hover"
                            style={{
                                border: '2px solid transparent',
                                borderImage: 'linear-gradient(45deg, #ff2d00, #ffb921, #f4d4d4) 1',
                            }}
                        >
                            {/* Image Section */}
                            <div className="lg:w-1/3 w-full lg:h-auto rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]">
                                <img
                                    alt={products.title}
                                    className="w-full h-80 object-cover object-center bg-white border-2 border-white rounded-[5px]"
                                    src={products.imageUrl}
                                />
                            </div>

                            {/* Product Details Section */}
                            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2
                                    className="text-sm title-font tracking-widest text-gray-400 mb-1"
                                >
                                    Cattle_Name
                                </h2>
                                <h1
                                    className="text-3xl title-font font-medium mb-2 text-white overflow-hidden"
                                >
                                    {products.title}
                                </h1>

                                {/* Rating and Social Links */}
                                <div className="flex mb-4 items-center star-rating">
                                    <span className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-4 h-4 text-pink-500"
                                                viewBox="0 0 24 24"
                                                style={{ animationDelay: `${i * 0.4}s` }} // Staggered star fill
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                        <span className="ml-3 text-gray-400">5 Reviews</span>
                                    </span>
                                    <span className="flex ml-auto space-x-3">
                                        <a
                                            href="https://www.instagram.com/lokeshwagh34/"
                                            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
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
                                            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
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
                                            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
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
                                    className="leading-relaxed border-b-2 mb-5 pb-5 text-gray-300"
                                >
                                    {products.description}
                                </p>

                                {/* Price and Actions */}
                                <div className="flex items-center">
                                    <span
                                        className="title-font font-medium text-2xl text-pink-400"
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
                                            isLiked ? 'bg-pink-500 text-white animate-pulse-heart' : 'bg-gray-700 text-gray-300 hover:text-pink-500'
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
                            className="text-center py-20 text-white"
                        >
                            <h2 className="text-2xl font-medium">Product Not Found</h2>
                            <p className="mt-2 text-gray-400">
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
