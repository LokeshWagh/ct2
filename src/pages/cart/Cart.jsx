import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { MdEmail } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa"; // For empty cart icon

function Cart() {
    const context = useContext(myContext);
    // Removed 'mode' as it's no longer used

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);

    // Remove item from cart
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from Cart");
    };

    // Handle duplicates and add quantity support
    useEffect(() => {
        const uniqueItemsMap = new Map();
        cartItems.forEach((item) => {
            if (uniqueItemsMap.has(item.id)) {
                const existing = uniqueItemsMap.get(item.id);
                existing.quantity = (existing.quantity || 1) + 1;
                dispatch(deleteFromCart(item)); // Remove duplicate
                console.warn(`Duplicate item merged: ${item.title}`);
            } else {
                uniqueItemsMap.set(item.id, { ...item, quantity: item.quantity || 1 });
            }
        });
    }, [cartItems, dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let temp = 0;
        cartItems.forEach((cartItem) => {
            const itemPrice = parseInt(cartItem.price) || 0; // Fallback if price is invalid
            temp += itemPrice * (cartItem.quantity || 1);
        });
        setTotalAmount(temp);
    }, [cartItems]);

    const shipping = parseInt(100);
    const grandTotal = shipping + totalAmount;

    // Clear entire cart with confirmation
    const clearCart = () => {
        if (window.confirm("Are you sure you want to clear the cart?")) {
            cartItems.forEach((item) => dispatch(deleteFromCart(item)));
            toast.success("Cart Cleared");
        }
    };

    // Handle mail click with fallback toast
    const handleMailClick = () => {
        toast.info("Opening email client... If nothing happens, check your default email app settings.");
    };

    return (
        <Layout>
            <div className="min-h-screen pt-5 bg-black text-white overflow-hidden">
                <div className="flex justify-between items-center mb-10 px-6 overflow-hidden">
                    <h1 className="text-3xl font-bold overflow-hidden">Total Cattle ({cartItems.length})</h1>
                    {cartItems.length > 0 && (
                        <button
                            onClick={clearCart}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                        >
                            Clear Cart
                        </button>
                    )}
                </div>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {/* Cart Items Section */}
                    <div className="md:w-2/3">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-10 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg  overflow-hidden">
                                <FaShoppingCart className="text-6xl text-gray-400 mx-auto mb-4" />
                                <h2 className="text-xl font-medium">Your Cart is Empty</h2>
                                <p className="mt-2 text-gray-400">
                                    Add some cows to your cart to get started!
                                </p>
                                <a href="/allproducts" className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-lg hover:from-pink-700 hover:to-orange-600 transition-all duration-300">
                                    buy Now
                                </a>
                            </div>
                        ) : (
                            cartItems.map((item, index) => {
                                const { id, title, price, description, imageUrl, quantity = 1 } = item;
                                return (
                                    <div
                                        key={id}
                                        className="mb-6 rounded-lg border p-6 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center md:items-start gap-4"
                                        style={{
                                            background: 'linear-gradient(180deg, rgb(46 49 55), black)',
                                            border: '2px solid transparent',
                                            borderImage: 'linear-gradient(45deg, #ff2d00, #ffb921, #f4d4d4) 1',
                                        }}
                                    >
                                        {/* Image Section (Clickable) */}
                                        <div
                                            onClick={() => (window.location.href = `/productinfo/${id}`)}
                                            className="cursor-pointer w-40 h-40 rounded-lg overflow-hidden"
                                        >
                                            <img
                                                src={imageUrl}
                                                alt={title}
                                                className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
                                            />
                                        </div>

                                        {/* Details Section */}
                                        <div className="flex-1 text-center md:text-left">
                                            <div
                                                onClick={() => (window.location.href = `/productinfo/${id}`)}
                                                className="cursor-pointer"
                                            >
                                                <h2 className="text-lg font-bold truncate text-white">
                                                    {title}
                                                </h2>
                                                <p className="mt-1 text-sm line-clamp-2 text-gray-300">
                                                    {description}
                                                </p>
                                                <p className="mt-1 text-sm font-semibold text-pink-400">
                                                    ₹{price} x {quantity} = ₹{price * quantity}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => deleteCart(item)}
                                            className="mt-4 md:mt-0 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                                            title="Remove Item"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* Summary Section */}
                    <div
                        className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3"
                        style={{
                            background: 'linear-gradient(180deg, rgb(46 49 55), black)',
                            border: '2px solid transparent',
                            borderImage: 'linear-gradient(45deg, #ff2d00, #ffb921, #f4d4d4) 1',
                        }}
                    >
                        <div className="mb-2 flex justify-between">
                            <p className="text-white">Subtotal</p>
                            <p className="text-white">₹{totalAmount}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-white">Shipping</p>
                            <p className="text-white">₹{shipping}</p>
                        </div>
                        <hr className="my-4 border-gray-600" />
                        <div className="flex justify-between mb-3">
                            <p className="text-lg font-bold text-white">
                                Total
                            </p>
                            <p className="text-lg font-bold text-white">
                                ₹{grandTotal}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <center>
                                <a href={`mailto:lokeshwagh@gmail.com?`}>
                                    <button
                                        className="flex items-center justify-center w-72 h-10 rounded-lg border-4 border-neutral-950 transition-all duration-300 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 text-white"
                                    >
                                        Contact Us <MdEmail className="ml-2" />
                                    </button>
                                </a>
                            </center>
                            {/* <center>
                                <a href={`mailto:lokeshwagh@gmail.com?subject=Buy Now from Cart&body=Hello, I'd like to purchase my cart items. Total: ₹${grandTotal}`}>
                                    <button
                                        className="flex items-center justify-center w-72 h-10 rounded-lg border-4 border-neutral-950 transition-all duration-300 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 text-white"
                                    >
                                        Buy Now <IoCashOutline className="ml-2" />
                                    </button>
                                </a>
                            </center> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Cart;
