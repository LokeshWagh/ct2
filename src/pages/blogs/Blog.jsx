

    // src/pages/Home.js
    import React, { useContext } from 'react'
    import myContext from '../../context/data/myContext';
    import Layout from '../../components/layout/Layout';
    // import React from 'react';
    import { Link } from 'react-router-dom';
    import { cows } from '../../Data/cows.js';
    
    import "../../App.css";
    function Blog(){
      const context = useContext(myContext)
      const { mode } = context; 
      return (
      <><Layout >
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
        <div style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <center><h1 className='text-6xl pt-20' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>Cattles Blogs</h1></center>
            <div className='container '>
                 <div className="cow-list container pb-11 " >
                      {cows.map((cow) => (
                          <div key={cow.id} className="cow-item flex justify-around h-100 pt-20 " >
                            <div className='c'>
                            <h1 className='cName'>{cow.name}</h1>
                            <p className='breed ml-8'>{cow.subTitle}</p>
                            <p className='writer ml-14'>written by :-{cow.writer}</p>
                            <p className='ml-14'>{cow.description}</p>
                            <Link className='Vdetail ml-14 mt-8' to={`/cow/${cow.id}`} style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'aqua' : '', }}>Continue Reading ....</Link>
                            </div> 
                            <div className=''><img src={cow.image} alt={cow.name} width="200" className='img  mt-6 mr-5'/></div>
                          </div>
                       ))}
                  </div>
             
            </div>
    
    </div>
    </Layout>
        </>
        );
    
    
    };
    export default Blog;