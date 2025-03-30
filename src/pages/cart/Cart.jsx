import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { MdEmail } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";

function Cart() {
    const context = useContext(myContext);
    const { mode } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);

    // Remove item from cart
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from Cart");
    };

    // Prevent duplicates by checking if an item already exists in the cart
    // This should ideally be handled in the addToCart action, but we'll log a message here for clarity
    useEffect(() => {
        const uniqueItems = [];
        const duplicates = [];
        cartItems.forEach((item) => {
            if (uniqueItems.find((uniqueItem) => uniqueItem.id === item.id)) {
                duplicates.push(item);
            } else {
                uniqueItems.push(item);
            }
        });
        if (duplicates.length > 0) {
            console.warn("Duplicate items found in cart:", duplicates);
            // Optionally, you can dispatch deleteFromCart for duplicates here
        }
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let temp = 0;
        cartItems.forEach((cartItem) => {
            temp += parseInt(cartItem.price);
        });
        setTotalAmount(temp);
    }, [cartItems]);

    const shipping = parseInt(100);
    const grandTotal = shipping + totalAmount;

    return (
        <Layout>
            <div
                className="min-h-screen pt-5"
                style={{
                    backgroundColor: mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: mode === 'dark' ? 'white' : 'black',
                }}
            >
                <h1 className="mb-10 text-center text-3xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {/* Cart Items Section */}
                    <div className="md:w-2/3">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-10">
                                <h2 className="text-xl font-medium">Your Cart is Empty</h2>
                                <p className="mt-2" style={{ color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(107 114 128)' }}>
                                    Add some cows to your cart to get started!
                                </p>
                            </div>
                        ) : (
                            cartItems.map((item, index) => {
                                const { id, title, price, description, imageUrl } = item;
                                return (
                                    <div
                                        key={id}
                                        className="mb-6 rounded-lg border p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                                        style={{
                                            background: mode === 'dark'
                                                ? 'linear-gradient(180deg, rgb(46 49 55), black)'
                                                : 'linear-gradient(180deg, #f4f4f4, #ffffff)',
                                            border: '2px solid transparent',
                                            borderImage: mode === 'dark'
                                                ? 'linear-gradient(45deg, #ff2d00, #ffb921, #f4d4d4) 1'
                                                : 'linear-gradient(45deg, #ff6f61, #ffd700, #d3d3d3) 1',
                                        }}
                                    >
                                        <div className="flex items-center">
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
                                            <div className="ml-4 flex-1">
                                                <div
                                                    onClick={() => (window.location.href = `/productinfo/${id}`)}
                                                    className="cursor-pointer"
                                                >
                                                    <h2
                                                        className="text-lg font-bold truncate"
                                                        style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}
                                                    >
                                                        {title}
                                                    </h2>
                                                    <p
                                                        className="mt-1 text-sm line-clamp-2"
                                                        style={{ color: mode === 'dark' ? 'rgb(209 213 219)' : 'rgb(75 85 99)' }}
                                                    >
                                                        {description}
                                                    </p>
                                                    <p
                                                        className="mt-1 text-sm font-semibold"
                                                        style={{ color: mode === 'dark' ? 'rgb(236 72 153)' : 'rgb(244 114 182)' }}
                                                    >
                                                        ₹{price}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => deleteCart(item)}
                                                className="ml-4 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
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
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* Summary Section */}
                    <div
                        className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3"
                        style={{
                            background: mode === 'dark'
                                ? 'linear-gradient(180deg, rgb(46 49 55), black)'
                                : 'linear-gradient(180deg, #f4f4f4, #ffffff)',
                            border: '2px solid transparent',
                            borderImage: mode === 'dark'
                                ? 'linear-gradient(45deg, #ff2d00, #ffb921, #f4d4d4) 1'
                                : 'linear-gradient(45deg, #ff6f61, #ffd700, #d3d3d3) 1',
                        }}
                    >
                        <div className="mb-2 flex justify-between">
                            <p style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}>Subtotal</p>
                            <p style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}>₹{totalAmount}</p>
                        </div>
                        <div className="flex justify-between">
                            <p style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}>Shipping</p>
                            <p style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}>₹{shipping}</p>
                        </div>
                        <hr className="my-4" style={{ borderColor: mode === 'dark' ? 'rgb(75 85 99)' : 'rgb(229 231 235)' }} />
                        <div className="flex justify-between mb-3">
                            <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}>
                                Total
                            </p>
                            <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}>
                                ₹{grandTotal}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <center>
                                <a href="mailto:lokeshwagh@gmail.com">
                                    <button
                                        className="flex items-center justify-center w-72 h-10 rounded-lg border-4 border-neutral-950 transition-all duration-300"
                                        style={{
                                            background: mode === 'dark'
                                                ? 'linear-gradient(to right, #ff2d00, #ffb921)'
                                                : 'linear-gradient(to right, #ff6f61, #ffd700)',
                                            color: mode === 'dark' ? 'white' : 'black',
                                        }}
                                    >
                                        Contact Us <MdEmail className="ml-2" />
                                    </button>
                                </a>
                            </center>
                            <center>
                                <a href="mailto:lokeshwagh@gmail.com">
                                    <button
                                        className="flex items-center justify-center w-72 h-10 rounded-lg border-4 border-neutral-950 transition-all duration-300"
                                        style={{
                                            background: mode === 'dark'
                                                ? 'linear-gradient(to right, #ff2d00, #ffb921)'
                                                : 'linear-gradient(to right, #ff6f61, #ffd700)',
                                            color: mode === 'dark' ? 'white' : 'black',
                                        }}
                                    >
                                        Buy Now <IoCashOutline className="ml-2" />
                                    </button>
                                </a>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Cart;