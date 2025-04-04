import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Img from "../../Video/contactUs.png";
import { Link } from 'react-router-dom';
import "./contact.css";
import { toast } from "react-toastify";

function Contact() {
    const [userData, setUserData] = useState({
        firstName: "",
        address: "",
        contact: "",
        email: "",
        cattle: "",
        massege: ""
    });

    const postUserData = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const { firstName, address, contact, email, massege } = userData;

    const submitData = async (event) => {
        event.preventDefault();
        if (firstName === "" || address === "" || contact === "" || email === "") {
            return toast.error("Please fill in all fields");
        }

        const res = await fetch("https://sellsproducts-9c8f5-default-rtdb.firebaseio.com/saleContact.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName, address, contact, email, massege
            })
        });

        if (res) {
            setUserData({
                firstName: "",
                address: "",
                contact: "",
                email: "",
                cattle: "",
                massege: ""
            });
            toast.success("Data Submitted Successfully");
        } else {
            alert("Please fill in the data");
        }
    };

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Layout>
            <section className={`flex flex-col md:flex-row items-center justify-center p-8 ${mode === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={Img} alt="Contact Us" className="w-3/4 rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8 mt-6 md:mt-0">
                    <h2 className="text-2xl font-bold text-center text-emerald-500 mb-4">Contact Us</h2>
                    <form onSubmit={submitData} className="space-y-4">
                        <input type="text" name="firstName" value={userData.firstName} onChange={postUserData} placeholder="First Name" className="w-full p-2 border rounded" />
                        <input type="text" name="address" value={userData.address} onChange={postUserData} placeholder="Address" className="w-full p-2 border rounded" />
                        <input type="text" name="contact" value={userData.contact} onChange={postUserData} placeholder="Contact Number" className="w-full p-2 border rounded" />
                        <input type="text" name="cattle" value={userData.cattle} onChange={postUserData} placeholder="Cattle" className="w-full p-2 border rounded" />
                        <input type="email" name="email" value={userData.email} onChange={postUserData} placeholder="Email" className="w-full p-2 border rounded" />
                        <textarea name="massege" value={userData.massege} onChange={postUserData} placeholder="Message" className="w-full p-2 border rounded h-24"></textarea>
                        <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-3 rounded-lg">Submit</button>
                    </form>
                </div>
            </section>
        </Layout>
    );
}

export default Contact;
