import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { signInStart,signInFailure,signInSuccess } from '../redux/userSlice'
import OAuth from '../components/OAuth'


function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading , error:errorMessage} = useSelector((state)=>state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if(email === '' || password === ''){
      return dispatch(signInFailure('Please fill all fields')) ;
    }
    try{
      dispatch(signInStart());
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
        dispatch(signInSuccess(res.data)); 
        console.log('following is the response from the server')
        console.log(signInSuccess(res.data));
          navigate('/home');
  

    }catch(e){
      dispatch(signInFailure(e.response.data.message));

    }

  }





  return (
    <div>
       <div className='flex bg-[#162237]'>
        <div className='h-screen w-1/2 relative'>
          <div className='w-96 absolute right-0 top-64 mr-4' >
            {/* <h1 className='px-2 bg-gradient-to-r from-indigo-400 via-purple to-pink-400 rounded-lg text-white w-fit p-3 font-bold text-3xl'>TravelCamp</h1> */}
            <p className='mt-3 flex text-left text-3xl text-white'>You are just one step</p>
            <p className='mt-3 flex text-left text-3xl text-white'>away from embarking</p>
            <p className='mt-3 flex text-left text-3xl text-white'>on a remarkable</p>
            <p className='mt-3 flex text-left text-[#3DBBCD] text-6xl'>Adventure</p>
          </div>
          

        </div>
        <div className=' h-screen w-1/2 relative'>
          <form action="" className='block w-80  absolute top-32' onSubmit={handleSubmit}>
              
              
            <div className='mb-4'>
              <label className='flex w-80 font-medium text-white' for='email'>Email</label>
              <input className='border border-solid rounded-lg bg-slate-100 w-80'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder='Enter Your Email Address' 
                type="email" 
                name='email'
                required 
              />
              
            </div>
              

            <div className='mb-4'>
              <label className='flex w-80 font-medium text-[#ffffff]' for='password'>Password</label>
              <input className='border border-solid rounded-lg bg-slate-100 w-80'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder='Enter Your Password'
                type="password" 
                name='password'
                required/>

            </div>


            <button disabled={loading} className='mb-4 border border-solid py-3 w-full rounded-lg bg-[#3DBBCD]'>
              {loading ? (<Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>) : 'Sign In'}
            </button>
            <OAuth/>

            <p className='flex text-base'>Don't have an account?</p>
            <a href="/signup" className='ml-3 text-[#3DBBCD]'>Sign Up</a>
            
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


