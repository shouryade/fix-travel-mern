import React, { useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { useSelector } from 'react-redux';

const Button = ({ children, className, icon, ...props }) => (
  <button
    className={`flex justify-center items-center px-4 py-3 rounded-md w-full transition-all duration-300 hover:scale-105 ${className}`}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

const InputField = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block font-bold text-white mb-2 text-left">{label}</label>
    <input
      className="w-full px-3 py-2 rounded-md border-2 border-white border-opacity-50 text-white bg-transparent placeholder-white placeholder-opacity-50 transition-transform duration-300 hover:scale-105"
      {...props}
    />
  </div>
);

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [variable, setVariable] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (name === '' || email === '' || password === '') {
      setErrorMessage('Please fill all fields');
      setLoading(false);
      return;
    }
    try {
      setErrorMessage(null);
      const res = await axios.post('http://localhost:3000/api/auth/signup', {
        userName: name.trim(),
        email: email.trim(),
        password: password.trim(),
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMsg(res.data);
      setVariable(true);
      setLoading(false);
      setTimeout(() => {
        
        navigate('/signin');
      }, 10000);
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <main className="min-h-screen bg-slate-800 relative flex items-center justify-center p-4">
      <img src="/src/assets/signin_bg.png" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl text-white leading-tight acme-font">
            You're just one step away from embarking on a remarkable{" "}
          </h1>
          <span className="text-teal-400  text-8xl" style={{ fontFamily: "'Aladdin', cursive" }}>Adventure</span>
        </div>
        <div className="lg:w-1/2 w-full max-w-md">
          {variable && (
            <div className='mt-4 p-4 rounded-lg text-center bg-green-100 text-green-700 border border-green-400'>
              An Email Verification Link has been sent to your email address. Please verify your email address to continue.
            </div>
          )}
          <form className="bg-black bg-opacity-60 rounded-xl border border-white border-opacity-20 p-6 text-lg" onSubmit={handleSubmit}>
            <h2 className="font-bold text-white text-2xl mb-6 text-left">Sign up</h2>
            <OAuth />
            <div className="my-4 flex items-center">
              <hr className="flex-grow border-white border-opacity-80" />
              <span className="px-3 text-white text-opacity-80">or</span>
              <hr className="flex-grow border-white border-opacity-80" />
            </div>
            <InputField
              value={name}
              onChange={(e) => { setName(e.target.value); }}
              required
              label="Name"
              type="text"
              placeholder="Enter Your Full Name"
            />
            <InputField
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              required
              label="Email"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <InputField
              value={password}
              onChange={(e) => { setPassword(e.target.value); }}
              required
              label="Password"
              type="password"
              placeholder="At least 8 characters"
            />
            <Button
              disabled={loading}
              className="mt-6 font-bold text-white bg-teal-400 bg-opacity-60 hover:bg-opacity-80"
            >
              {loading ? (<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>) : 'Sign Up'}
            </Button>
            <div className="text-center text-white mt-6">
              <p>Already have an account?</p>
              <a href="/signin" className="font-bold text-teal-400 hover:underline mt-2 inline-block transition-transform duration-300 hover:scale-105">
                Log in
              </a>
            </div>
          </form>
          {errorMessage && (
            <div className='mt-4 p-4 rounded-lg text-center bg-red-100 text-red-700 border border-red-400'>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Signup;
