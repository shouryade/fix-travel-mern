
import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import { useSelector } from 'react-redux'
import { set } from 'mongoose'


const Button = ({ children, className, icon, ...props }) => (
  <button
    className={`flex justify-center items-center px-4 py-3 rounded-md w-full transition-all duration-300 hover:scale-105 ${className}`}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
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

function Signup(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading , setLoading] = useState(null);
  const [variable,setVariable] = useState(false);
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(name === '' || email === '' || password === ''){
      setErrorMessage('Please fill all fields');
      console.log(errorMessage)
      return errorMessage;
    }
    try{

      setErrorMessage(null)
      const res = await axios.post('http://localhost:3000/api/auth/signup', {
        userName: name.trim(),
        email: email.trim(),
        password: password.trim()

      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
        setVariable(true);
        console.log('data sent successfully')
        console.log(res);
        setLoading(false);
        setTimeout(()=>{
          navigate('/');

        }, 3000)

          
  

    }catch(e){
      setLoading(false);
      console.log('data not sent')
      console.log(e)
      setErrorMessage(e.response.data.message)
      
      
    }

  }





  return(
    <main className="min-h-screen bg-slate-800 relative flex items-center justify-center p-4">
    <img
      src="/src/assets/signin_bg.png"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl text-white leading-tight acme-font">
          You're just one step away from embarking on a remarkable{" "}
        </h1>
        <span className="text-teal-400  text-8xl" style={{ fontFamily: "'Aladdin', cursive" }}>Adventure</span>
      </div>
      <div className="lg:w-1/2 w-full max-w-md">
        {variable && (<div className='mt-4 p-4 rounded-lg text-center bg-red-100 text-green-700 border border-green-400'>
          SignUp successfull, redirecting to login page in few seconds
        </div>)}
      
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
           onChange={(e)=>{setName(e.target.value)}}
           required
          label="Name" 
          type="text" 
          placeholder="Enter Your Full Name" />


          <InputField
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
          label="Email" 
          type="email" 
          placeholder="Enter Your Email Address" />


          <InputField 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          required
          label="Password" 
          type="password" 
          placeholder="At least 8 characters" />


          <Button 
          disabled={loading}
          className="mt-6 font-bold text-white bg-teal-400 bg-opacity-60 hover:bg-opacity-80">
            {loading ? (<Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>) : 'Sign Up'}
          </Button>
          <div className="text-center text-white mt-6">
            <p>Already have an account?</p>
            <a href="/signin" className="font-bold text-teal-400 hover:underline mt-2 inline-block transition-transform duration-300 hover:scale-105">
              Log in
            </a>
          </div>
        </form>

        {errorMessage && (
        <div
          className='mt-4 p-4 rounded-lg text-center bg-red-100 text-red-700 border border-red-400'
        >
          {errorMessage}
        </div>
      )}


      </div>
    </div>
  </main>

  )

}

  
  


export default Signup;