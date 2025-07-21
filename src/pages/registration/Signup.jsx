import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for fields

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      signup(); // Trigger signup when Enter is pressed
    }
  };

  const navigate = useNavigate(); // Hook for navigation

  const signup = async () => {
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Congratulation 😊 Signup Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      navigate('/login'); // Navigate to login page
    } catch (error) {
      console.log(error);
      toast.error("Signup failed 🥹 try again");
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-black relative'>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <Loader /> {/* Full-height loader overlay */}
        </div>
      )}
      <div className='bg-gradient-to-b from-gray-800 to-black px-10 py-10 rounded-xl shadow-2xl animate-fadeIn max-w-md w-full'>
        <div className="">
          <h1 className='text-center text-white text-3xl mb-6 font-bold overflow-hidden'>Signup</h1>
        </div>
        <div className="relative mb-4">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            name='name'
            className='bg-gray-900 mb-4 px-10 py-3 w-full rounded-lg text-white placeholder:text-gray-400 outline-none border-2 border-transparent focus:border-pink-500 focus:scale-105 transition-all duration-300 shadow-md'
            placeholder='Name'
          />
        </div>

        <div className="relative mb-4">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            name='email'
            className='bg-gray-900 mb-4 px-10 py-3 w-full rounded-lg text-white placeholder:text-gray-400 outline-none border-2 border-transparent focus:border-pink-500 focus:scale-105 transition-all duration-300 shadow-md'
            placeholder='Email'
          />
        </div>
        <div className="relative mb-6">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            className='bg-gray-900 mb-4 px-10 py-3 w-full rounded-lg text-white placeholder:text-gray-400 outline-none border-2 border-transparent focus:border-pink-500 focus:scale-105 transition-all duration-300 shadow-md'
            placeholder='Password'
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400 hover:text-pink-500 transition-colors duration-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className='flex justify-center mb-4'>
          <button
            onClick={signup}
            className='bg-gradient-to-r from-pink-600 to-orange-500 w-full text-white font-bold px-2 py-3 rounded-lg hover:from-pink-700 hover:to-orange-600  shadow-lg'
          >
            Signup
          </button>
        </div>
        <div className="text-center">
          <h2 className='text-white'>Have an account? <Link className='text-pink-400 font-bold hover:text-pink-300 transition-colors duration-300' to={'/login'}>Login</Link></h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
