

    // src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { cows } from '../../Data/cows.js';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

function Blog(){ {
  return (
  <><Navbar/>
    {/* <div>
      <h1>Cow Blog</h1>
      <div className="cow-list" >
        {cows.map((cow) => (
          <div key={cow.id} className="cow-item" >
            <img src={cow.image} alt={cow.name} width="200" />
            <h2>{cow.name}</h2>
            <p>{cow.breed}</p>
            <p>{cow.description}</p>
            <Link to={`/cow/${cow.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div> */}

    <center><h1 className='text-6xl '>Cattles Blogs</h1></center>
        <div className='container '>
             <div className="cow-list row" >
                  {cows.map((cow) => (
                     <div key={cow.id} className="cow-item " >
                        <div className='col-sm-8'>
                        <h2>{cow.name}</h2>
                        <p>{cow.breed}</p>
                        <p>{cow.description}</p>
                        </div> 
                        <div className='col-sm-4'><img src={cow.image} alt={cow.name} width="200" /></div>
            <Link to={`/cow/${cow.id}`}>View Details</Link>
          </div>
        ))}
      </div>
         
        </div>


    <Footer/>
    </>
    );
};

};
export default Blog;