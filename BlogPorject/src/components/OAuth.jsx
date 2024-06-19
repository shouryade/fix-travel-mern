import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleGoogleAuth = async()=>{
    
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'})
        const auth = getAuth(app);
    
        try{
    
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            console.log('resultsFromGoogle');
            console.log(resultsFromGoogle);
            
            const res = await axios.post('http://localhost:3000/api/auth/google', {
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                googlePhotoURL: resultsFromGoogle.user.photoURL

            })
            console.log('following is the response from the server')
            console.log(res);
            if(res.status === 200){
                console.log('res.ok');
                dispatch(signInSuccess(res.data));
                navigate('/');
                
            }
        }
        catch(error){
            console.log('Error signing in with google');
            console.log(error);
        }

    }

  return (
    <div>
      <button onClick={handleGoogleAuth} className='border border-solid py-3 w-full rounded-lg bg-gradient-to-r from-indigo-400 via-purple to-pink-400 mb-5'>
              <span className='inline-block mr-3 '><FaGoogle /></span>
              <span className=''>Continue with Google</span>
      </button>
    </div>
  )
}

export default OAuth
