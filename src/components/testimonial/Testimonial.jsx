import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import imag from '../../Video/lok.jpg';
import "./Testimonial.css"
function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section className='mainDiv relative text-white'>
                <div className="container mx-auto px-5 py-10">
                    <h1 className='headingTestimonial text-center text-3xl font-bold'>
                        Testimonial
                    </h1>
                    <h2 className='text-center text-2xl font-semibold mb-10'>
                        What our <span className='text-pink-500'>customers</span> are saying
                    </h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src={imag}
                                />
                                <p className="leading-relaxed">
                                    The product listings are informative, showcasing the diversity of available cattle. 
                                    Streamlined checkout and responsive design enhance user experience. 
                                    Consider integrating customer testimonials to build trust and credibility.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2
                                    style={{ color: mode === 'dark' ? 'black' : '#ff4162' }}
                                    className="font-medium title-font tracking-wider text-sm uppercase"
                                >
                                    Lokesh Wagh
                                </h2>
                                <p style={{ color: mode === 'dark' ? 'white' : 'gray' }} className="text-gray-500">
                                    Senior Product Designer
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                                />
                                <p className="leading-relaxed">
                                    Impressive cattle-selling website, seamlessly crafted with React. 
                                    Intuitive UI, responsive design, and efficient data handling. 
                                    Clean codebase ensures optimal performance. 
                                    Suggest incorporating dynamic features for enhanced user engagement and real-time updates.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2
                                    style={{ color: mode === 'dark' ? 'black' : '#ff4162' }}
                                    className="font-medium title-font tracking-wider text-sm uppercase"
                                >
                                    Rajeshwari
                                </h2>
                                <p style={{ color: mode === 'dark' ? 'white' : 'gray' }} className="text-gray-500">
                                    UI Developer
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://media.istockphoto.com/id/1453962739/photo/the-middle-aged-indian-farmer-is-smiling-while-showing-his-monthly-income-indian-model.jpg?s=612x612&w=0&k=20&c=YdevYcNxwoQB1efBaOzATJywHHarzzpXAQ7Sd_fTniY="
                                />
                                <p  className="leading-relaxed">
                                    Exceptional React-powered cattle website delivering prime livestock and stellar service. 
                                    Intuitive UI, responsive design, and efficient code. 
                                    Elevate user trust with dynamic features. 
                                    A top-tier platform for premium cattle and excellence in service.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2
                                    style={{ color: mode === 'dark' ? 'black' : '#ff4162' }}
                                    className="font-medium title-font tracking-wider text-sm uppercase"
                                >
                                    Rajesh Bhau
                                </h2>
                                <p style={{ color: mode === 'dark' ? 'white' : 'gray' }} className="text-gray-500">
                                    Farmer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;