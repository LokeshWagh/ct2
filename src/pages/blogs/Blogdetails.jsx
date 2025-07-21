// src/pages/CowDetail.js

import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { cows } from "../../Data/cows.js";
import "../../App.css";

const Blogdetails = () => {
  const { id } = useParams();
  const cow = cows.find((c) => c.id === parseInt(id));
  const context = useContext(myContext);
  // Removed 'mode' as it's no longer used

  if (!cow) {
    return <h2 className="text-white text-center mt-8">Cow not found</h2>;
  }

  return (
    <>
      <Layout>
        <div className="bg-black text-white min-h-screen p-4 md:p-8">
          <center className="headingDetail text-4xl md:text-5xl font-bold mb-8 overflow-hidden">
            Cattle Details
          </center>
          <center>
            <h1 className="cowDetailName text-3xl md:text-4xl font-bold mb-6 overflow-hidden">
              {cow.name}
            </h1>
          </center>
          <div className="mainDetail flex flex-col md:flex-row justify-center items-center md:items-start gap-8 pb-12">
            <div className="firstDetail w-full md:w-1/2 flex flex-col items-center">
              <img
                src={cow.image}
                alt={cow.name}
                className="imgDetail rounded-lg shadow-lg max-w-full h-auto mb-4"
              />
              <p className="text-lg mb-2">
                <strong>Breed:</strong> {cow.subTitle}
              </p>
              <p className="text-lg mb-2">
                <strong>Age:</strong> {cow.age} years
              </p>
              <p className="text-lg">
                <strong>Written by:</strong> {cow.writer}
              </p>
            </div>

            <div className="mainDetail2 w-full md:w-1/2">
              <p className="cowDetailDes text-base md:text-lg leading-relaxed">
                {cow.details}
              </p>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <Link
              to={"/blogs"}
              className="px-6 py-3 text-lg font-bold text-black rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 gradient-link bg-slate-300"
            >
              Move To Blogs
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blogdetails;
