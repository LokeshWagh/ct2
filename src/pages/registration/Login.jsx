import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for fields

function Login() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            login(); // Trigger login when Enter is pressed
        }
    };

    const login = async () => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login failed! Invalid credential entered 😊", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <div className='flex justify-center items-center h-screen relative bg-black'>
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div >
                        <Loader/>
                    </div>
                </div>
            )}
            <div className={`bg-gradient-to-b from-gray-800 to-black px-10 py-10 rounded-xl shadow-2xl animate-fadeIn max-w-md w-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <div>
                    <h1 className='text-center text-white text-3xl mb-6 font-bold overflow-hidden'>Login</h1>
                </div>
                <div className="relative mb-4">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}
                        name='email'
                        className='bg-gray-900 mb-4 px-10 py-3 w-full rounded-lg text-white placeholder:text-gray-400 outline-none border-2 border-transparent focus:border-pink-500 transition-all duration-300 shadow-md'
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
                        className='bg-gray-900 mb-4 px-10 py-3 w-full rounded-lg text-white placeholder:text-gray-400 outline-none border-2 border-transparent focus:border-pink-500 transition-all duration-300 shadow-md'
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
                        onClick={login}
                        className='bg-gradient-to-r from-pink-600 to-orange-500 w-full text-white font-bold px-2 py-3 rounded-lg hover:from-pink-700 hover:to-orange-600 transition-all duration-300 shadow-lg'
                    >
                        Login
                    </button>
                </div>
                <div className="text-center">
                    <h2 className='text-white'>Don't have an account? <Link className='text-pink-400 font-bold hover:text-pink-300 transition-colors duration-300' to={'/signup'}>Signup...</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
