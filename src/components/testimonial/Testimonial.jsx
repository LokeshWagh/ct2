import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { testimonials } from '../../Data/testimonial.js';
import { FaStar } from 'react-icons/fa';
import "./Testimonial.css";

function Testimonial() {
    const context = useContext(myContext);
    // Removed 'mode' as it's no longer used

    // Function to render star rating
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
            />
        ));
    };

    return (
        <div>
            <section className='mainDiv relative text-white bg-black min-h-screen py-16'>
                <div className="container mx-auto px-5 py-10">
                    <h1 className='headingTestimonial text-center text-4xl font-bold mb-4 overflow-hidden'>
                        Testimonials
                    </h1>
                    <h2 className='text-center text-2xl font-semibold mb-10'>
                        What our <span className='text-pink-500'>customers</span> are saying
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={testimonial.id} 
                                className="p-6 animate-fadeIn"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="h-full text-center bg-gradient-to-b from-gray-800 to-black rounded-xl shadow-2xl p-6  hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]">
                                    <img
                                        alt={`${testimonial.name} testimonial`}
                                        className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-4 border-pink-500 shadow-lg transition-transform duration-300 hover:scale-110"
                                        src={testimonial.image}
                                    />
                                    
                                    {/* Star Rating */}
                                    <div className="flex justify-center mb-4">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    
                                    <p className="leading-relaxed text-gray-300 mb-6 text-sm lg:text-base">
                                        {testimonial.review}
                                    </p>
                                    
                                    <span className="inline-block h-1 w-10 rounded bg-gradient-to-r from-pink-600 to-orange-500 mb-4" />
                                    
                                    <h2 className="font-medium title-font tracking-wider text-sm uppercase text-pink-400 mb-1">
                                        {testimonial.name}
                                    </h2>
                                    
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
