import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

function ThankYou() {
    const navigate = useNavigate();
    const userDetails = useSelector((state) => state.form);
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div>
        <h1>Thank you , the details have been sent to the adin and a confirmtion mail has been sent on your mail , we Will get back to you soon</h1>
        <h1>{userDetails.userName}</h1>
        <h1>{userDetails.email}</h1>
        <h1>{userDetails.phoneNumber}</h1>
        <h1>{userDetails.checkInDate}</h1>
        <h1>{userDetails.checkOutDate}</h1>

        <button onClick={handleClick}>HomePage</button>
      
    </div>
  )
}

export default ThankYou
