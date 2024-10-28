// src/pages/CowDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { cows } from '../../Data/cows.js';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Blogdetails = () => {
  const { id } = useParams();
  const cow = cows.find((c) => c.id === parseInt(id));

  if (!cow) {
    return <h2>Cow not found</h2>;
  }

  return (
    <>
    <Navbar/>
      <h1>{cow.name}</h1>
      <img src={cow.image} alt={cow.name} width="400" />
      <p><strong>Breed:</strong> {cow.breed}</p>
      <p><strong>Age:</strong> {cow.age} years</p>
      <p>{cow.details}</p>
      <Footer/>
    </>
  );
};

export default Blogdetails;
