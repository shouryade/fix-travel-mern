import React, { useState, useEffect } from "react";
import logo from '/src/assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/formSlice";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { loadForm, loadFormSuccess } from "../redux/formSlice";
import { resetForm } from "../redux/formSlice";


function DateInput({ label, onChange, defaultVal }) {
  const changeFormat = (defaultVal) => {
    const originalDate = defaultVal;
    const dateObject = new Date(originalDate);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(dateObject.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="flex flex-col group">
      <label className="text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">{label}</label>
      <div className="relative">
        <input
          value={changeFormat(defaultVal) || " "}
          required
          type="date"
          min={formatDate(new Date())}
          className="bg-transparent border border-white p-2 text-white w-full appearance-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300"
          onChange={onChange}
        />
        <svg
          className="w-6 h-6 text-white absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-300 group-hover:text-cyan-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
    </div>
  );
}

const GuestInput = ({ label, onChange, defaultVal }) => (
  <div className="flex flex-col group">
    <label className="text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">{label}</label>
    <input
      className="bg-transparent border border-white p-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300"
      value={defaultVal}
      onChange={onChange}
      min="1"
    />
  </div>
);


function MyComponent() {

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [phoneNo, setPhoneNumber] = useState('');
  const [noOfGuests, setNumberOfGuests] = useState('');
  const [checkIn, setCheckInDate] = useState(today);
  const [checkOut, setCheckOutDate] = useState(tomorrow);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const form = useSelector((state) => state.form);
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector((state) => state.form);

  useEffect(() => {
    if (form.checkInDate) setCheckInDate(new Date(form.checkInDate));
    if (form.checkOutDate) setCheckOutDate(new Date(form.checkOutDate));
    if (form.numberOfGuests) setNumberOfGuests(form.numberOfGuests);
    if (form.phoneNumber) setPhoneNumber(form.phoneNumber);
  }, [form]);

  const handleClick = async (event) => {
    event.preventDefault();
    dispatch(loadForm());

    if (!currentUser) {
      try {
        dispatch(
          setFormData({
            phoneNumber: phoneNo,
            numberOfGuests: noOfGuests,
            checkInDate: checkIn,
            checkOutDate: checkOut,
            branchName: "Kasol",
            roomName: "Family Suite",
          })
        );

        const data = {
          from: location.pathname,
          phoneNumber: phoneNo,
          numberOfGuests: noOfGuests,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          branchName: "Kasol",
          roomName: "Family Suite"
        };

        navigate('/signin', { state: { from: data } });
      } catch (e) {
        console.error(e);
      } finally {
        dispatch(loadFormSuccess());
      }
    } else {
      const formData = {
        userName: currentUser.message.userName,
        email: currentUser.message.email,
        phoneNumber: phoneNo,
        numberOfGuests: noOfGuests,
        checkInDate: checkIn.toISOString().split('T')[0],
        checkOutDate: checkOut.toISOString().split('T')[0],
        branchName: "Kasol",
        roomName: "Family Suite",
      };

      try {
        const res = await axios.post('http://localhost:3000/api/forms/submit-form', formData);
        const propToSend = {
          roomName: "Family Suite",
          logo: "/src/assets/logo.png",
          background: "/src/assets/images_lux/img6.jpg"
        };

        navigate('/ThankYou', { state: propToSend });
      } catch (error) {
        console.error(error);
        alert('Error submitting form');
      } finally {
        dispatch(loadFormSuccess());
        dispatch(resetForm({}));
      }
    }
  };

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    if (checkOut && date >= checkOut) {
      setCheckOutDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // Set check-out date to one day after check-in date
    }
  };

  const handleCheckOutChange = (date) => {
    if (date > checkIn) {
      setCheckOutDate(date);
    }
  };

  const handleLogo = ( ) => {
    navigate('/');
  }

  return (
    <main className="flex flex-col min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/src/assets/images_lux/img6.jpg')"}}>
      <div className="bg-black bg-opacity-50 min-h-screen backdrop-blur-sm">
        <header className="flex flex-col items-center p-8 text-white">
          <div onClick={handleLogo}>
            <img 
              src={logo} 
              alt="Logo" 
              className="w-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
          </div>
          
          
          <h1 className="text-4xl text-center font-light tracking-wide hover:scale-105 ">
            <span className="inline-block transition-transform duration-300 ">Family</span> <br /> 
            <span className="inline-block transition-transform duration-300 ">Suite</span>
          </h1>
        </header>
        
        <section className="flex-grow flex items-center justify-center">
          <form
          onSubmit={handleClick}
           className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-3xl shadow-lg transition-all duration-300 hover:shadow-cyan-300/50">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <DateInput 
              label="Select Check-in date"
              onChange={(e) => handleCheckInChange(e.target.value)}
              defaultVal={checkIn}

              />

              <DateInput
               label="Select Check-out date"
               onChange={(e) => handleCheckOutChange(e.target.value)}
               defaultVal={checkOut}
               />

            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
            <GuestInput
                label="Number of Guests"
                value={noOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                defaultVal={noOfGuests}
              />
              <div className="flex flex-col group">
                <label className="text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">Mobile Number</label>
                <input
                  required
                  value={phoneNo}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  className="bg-transparent border border-white p-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300"
                />
              </div>
            </div>
            <button 
              disabled={loading}
              className="w-full bg-cyan-500 text-white py-3 rounded-lg text-xl transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : 'Send Enquiry'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default MyComponent;