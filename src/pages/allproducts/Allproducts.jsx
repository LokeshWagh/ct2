import React, { useContext, useEffect } from 'react';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Allproducts() {
  const context = useContext(myContext);
  const { 
    mode, 
    product, 
    searchkey, 
    setSearchkey, 
    filterType, 
    setFilterType,
    filterPrice, 
    setFilterPrice 
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Filter />
        <section className="body-font">
          <div className="container px-5 py-8 md:py-16 mx-auto">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-10 overflow-hidden">
              <h1 
                className="sm:text-3xl text-2xl font-medium title-font mb-2 overflow-y-hidden" 
                style={{ color: mode === 'dark' ? 'white' : 'text-gray-900' }}
              >
                Our Latest Collection
              </h1>
              <div className="h-1 w-20 bg-pink-600 rounded"></div>
            </div>

            <div className="flex flex-wrap -m-4">
              {product
                .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                .filter((obj) => obj.category.toLowerCase().includes(filterType))
                .filter((obj) => obj.price.includes(filterPrice))
                .map((item, index) => {
                  const { title, price, description, imageUrl, id } = item;
                  return (
                    <div 
                      onClick={() => window.location.href = `/productinfo/${id}`} 
                      key={index} 
                      className="p-4 md:w-1/4 drop-shadow-lg"
                    >
                      <div 
                        className="h-full border-2 hover:shadow-slate-600 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" 
                        style={{ 
                          backgroundColor: mode === 'dark' ? 'rgb(30 41 59)' : 'white',
                          borderColor: mode === 'dark' ? 'rgb(55 65 81)' : 'rgb(229 231 235)'
                        }}
                      >
                        <div className="flex justify-center cursor-pointer">
                          <img 
                            className="rounded-2xl w-full h-80 p-2 hover:scale-4 transition-scale-110 duration-300 ease-in-out" 
                            src={imageUrl} 
                            alt={title} 
                          />
                        </div>
                        <div className="p-5 border-t-2" style={{ borderColor: mode === 'dark' ? 'rgb(55 65 81)' : 'rgb(229 231 235)' }}>
                          <h2 
                            className="tracking-widest text-xs title-font font-medium mb-1" 
                            style={{ color: mode === 'dark' ? 'rgb(156 163 175)' : 'rgb(156 163 175)' }}
                          >
                            CattleHub
                          </h2>
                          <h1 
                            className="title-font text-lg font-medium mb-3" 
                            style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}
                          >
                            {title}
                          </h1>
                          <p 
                            className="leading-relaxed mb-3" 
                            style={{ color: mode === 'dark' ? 'white' : 'rgb(17 24 39)' }}
                          >
                            ₹{price}
                          </p>
                          <Link to={'/cart'}> <div className="flex justify-center">
                           
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                addCart(item);
                              }}

                              className="relative w-full py-2 text-white font-medium rounded-lg overflow-hidden bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 focus:ring-4 focus:ring-pink-300 transition-all duration-300 font-medium rounded-lg text-sm w-full py-2"
                            >
                              Add To Cart
                            </button>
                          </div></Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Allproducts;