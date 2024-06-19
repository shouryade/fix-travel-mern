import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading , setLoading] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(email === '' || password === ''){
      setErrorMessage('Please fill all fields');
      console.log(errorMessage)
      return errorMessage;
    }
    try{

      setErrorMessage(null)
      const res = await axios.post('http://localhost:3000/api/auth/signin', {
        email: email.trim(),
        password: password.trim()

      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
        
        console.log('data sent successfully')
        console.log(res);
        setLoading(false);

          navigate('/home');
  

    }catch(e){
      setLoading(false);
      console.log('data not sent')
      console.log(e)
      setErrorMessage(e.response.data.message)
      
      
    }

  }





  return (
    <div>
       <div className='flex'>
        <div className='h-screen w-1/2 relative'>
          <div className='w-96 absolute right-0 top-64 mr-4' >
            <h1 className='px-2 bg-gradient-to-r from-indigo-400 via-purple to-pink-400 rounded-lg text-white w-fit p-3 font-bold text-3xl'>TravelCamp</h1>
            <p className='mt-3 flex text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, impedit?</p>
          </div>
          

        </div>
        <div className=' h-screen w-1/2 relative'>
          <form action="" className='block w-80  absolute top-32' onSubmit={handleSubmit}>
              
              
            <div className='mb-4'>
              <label className='flex w-80 font-medium' for='email'>Your Email</label>
              <input className='border border-solid rounded-lg bg-slate-100 w-80'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder='name@company.com' 
                type="email" 
                name='email'
                required 
              />
              
            </div>
              

            <div className='mb-4'>
              <label className='flex w-80 font-medium' for='password'>Your Password</label>
              <input className='border border-solid rounded-lg bg-slate-100 w-80'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password" 
                name='password'
                required/>

            </div>


            <button disabled={loading} className='mb-4 border border-solid py-3 w-full rounded-lg bg-gradient-to-r from-indigo-400 via-purple to-pink-400'>
              {loading ? (<Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>) : 'Sign In'}
            </button>
            <button className='border border-solid py-3 w-full rounded-lg bg-gradient-to-r from-indigo-400 via-purple to-pink-400 mb-5'>Continue with Google</button>

            <p className='flex text-base'>Don't have an account? <a href="/signup" className='ml-3 text-blue-500'>Sign Up</a></p>
            
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
    </div>
  )
}

export default SignIn

