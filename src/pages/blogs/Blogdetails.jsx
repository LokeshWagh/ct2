// src/pages/CowDetail.js


import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useParams } from 'react-router-dom';
import { cows } from '../../Data/cows.js';
import "../../App.css"
const Blogdetails = () => {
  const { id } = useParams();
  const cow = cows.find((c) => c.id === parseInt(id));
  const context = useContext(myContext)
  const { mode } = context; 
  if (!cow) {
    return <h2>Cow not found</h2>;
  }

  return (
    <>
    <Layout>
    <div className='Page' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
    <center className='headingDetail'>Cattle Details</center>
    <center><h1 className='cowDetailName mt-12'>{cow.name}</h1></center>
    <div className='mainDetail mt-12 pb-12 flex justify-around align-middle flex-wrap '>
      
      <div className='firstDetail'><img src={cow.image} alt={cow.name} width="400px" height="300px" className='imgDetail' />
      <p className='pl-8 mt-2'><strong>Breed:</strong> {cow.subTitle}</p>
      <p className='pl-8 '><strong>Age:</strong> {cow.age} years</p>
      <p className='pl-8 '><strong>Written by :</strong>{cow.writer}</p>
      </div>
      
      <div className='mainDetail2 w-3/6'>
        <p className='cowDetailDes pl-14 mt-2 '>{cow.details}</p>
      </div>
      

      </div></div></Layout>
      
    </>
  );
};

export default Blogdetails;
