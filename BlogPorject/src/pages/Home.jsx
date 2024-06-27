// import * as React from "react";
// import Footer from "../components/footer";
// import { useState } from "react";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ButtonWithIcons from "../components/IncDecButton";





// function Home() {

// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(today.getDate() + 1);


// const [numberOfPeople, setNumberOfPeople] = useState(1);
// const [checkInDate, setCheckInDate] = useState(new Date());

// console.log(numberOfPeople)


// const [checkOutDate, setCheckOutDate] = useState(tomorrow);


//     const incrementCount = () => {
//         setNumberOfPeople(numberOfPeople + 1);
//     };

//     const decrementCount = () => {
//         if (numberOfPeople > 0) {
//             setNumberOfPeople(numberOfPeople - 1);
//         }
//     };

// console.log(checkInDate);




//   const NavItem = ({ text }) => (
//     <div className="text-white hover:text-teal-300 cursor-pointer">{text}</div>
//   );
  
//   const DateSection = ({ icon, title, date, subtitle, onDateChange }) => (
//     <div className="flex flex-col w-full sm:w-auto">
//         <div className="flex items-center gap-2 text-gray-600">
//             <img src={icon} alt={`${title} icon`} className="w-[24px] sm:w-[28px] md:w-[30px] aspect-[1.25]" />
//             <div className="text-xs sm:text-sm md:text-base">{title}</div>
//         </div>
//         <div className="mt-1 sm:mt-2 text-base sm:text-lg md:text-2xl font-semibold">
//             <DatePicker
//                 selected={date}
//                 onChange={onDateChange}
//                 dateFormat="dd/MM/yyyy"
//                 className="border border-solid bg-slate-100 text-center rounded-lg"
//             />
//         </div>
//         <div className="mt-1 text-xs sm:text-sm md:text-xl text-gray-400">{subtitle}</div>
//     </div>
// );



// const PeopleSection = ({ icon, title, people, subtitle  }) => (
//   <div className="flex flex-col w-full sm:w-auto">
//       <div className="flex items-center gap-2 text-gray-600">
//           <img src={icon} alt={`${title} icon`} className="w-[24px] sm:w-[28px] md:w-[30px] aspect-[1.25]" />
//           <div className="text-xs sm:text-sm md:text-base">{title}</div>
//       </div>
//       <div className="mt-1 sm:mt-2 text-base sm:text-lg md:text-2xl font-semibold">
//       <div className="mt-2 text-2xl font-semibold">
//       <div className="flex items-center justify-between w-20 bg-gray-200 rounded-lg px-2 py-1">
//             <button className="text-gray-700" onClick={decrementCount}>-</button>
//             <span className="text-gray-900 font-bold">{numberOfPeople}</span>
//             <button className="text-gray-700" onClick={incrementCount}>+</button>
//         </div>
//       </div>
//       </div>
//       <div className="mt-1 text-xs sm:text-sm md:text-xl text-gray-400">{subtitle}</div>
//   </div>
// );




//   const navItems = [
//     { text: "Testimonials" },
//     { text: "About us" },
//     { text: "Contact" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0F1A29] text-white relative overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/src/assets/bg_main.png"
//           alt="Background"
//           className="w-full h-full object-cover opacity-70"
//         />
//         <div className="absolute inset-0 bg-[#0F1A29] opacity-50"></div>
//       </div>
      
//       <div className="relative z-10 min-h-screen flex flex-col">
//         <header className="p-3 sm:p-5 md:p-6">
//           <nav className="flex flex-col sm:flex-row justify-between items-center">
//             <img
//               src={'/src/assets/logo.png'}
//               alt="Mid Orchard Logo"
//               className="w-[50px] sm:w-[70px] md:w-[90px] h-auto mb-3 sm:mb-0"
//             />
            
//             <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 md:gap-8 lg:gap-32">
//               {navItems.map((item, index) => (
//                 <NavItem key={index} text={item.text} />
//               ))}
//               <button className="bg-[#3DBBCD] text-white px-3 sm:px-5 py-1.5 sm:py-2 md:px-6 md:py-2 rounded-xl hover:bg-teal-500 mt-2 sm:mt-0 text-sm sm:text-base w-full sm:w-auto">
//                 LOGIN
//               </button>
//             </div>
//           </nav>
//         </header>

//         <main className="px-4 sm:px-8 md:px-20 py-6 sm:py-10 md:py-16 flex-grow flex flex-col justify-center">
//           <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
//             Hotel for <span className="text-[#3DBBCD] font-aguafina text-3xl sm:text-5xl md:text-7xl">memorable</span>
//             <br />
//             moments rich in
//             <br />
//             emotions
//           </h1>
//           <p className="text-sm sm:text-lg md:text-2xl mb-6 sm:mb-8">
//             Enjoy mesmerizing views of the
//             <br />
//             valley with a peaceful and
//             <br />
//             Luxurious stay
//           </p>
//           <button className="bg-[#3DBBCD] text-white px-4 sm:px-7 py-2 sm:py-2.5 md:px-8 md:py-3 rounded-xl hover:bg-teal-500 text-sm sm:text-base self-start">
//             BOOK NOW
//           </button>
//         </main>

//         <section className="bg-white text-black rounded-t-[36px] sm:rounded-tl-[72px] md:rounded-tl-[108px] p-4 sm:p-8 md:p-12 w-full sm:w-[85%] md:w-[75%] max-w-[1200px] self-end">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
//             <PeopleSection
//               icon="/src/assets/profile_icon.svg"
//               title="Guests"
//               people={`${numberOfPeople} person`}
//               subtitle="Add Guests"
//             />
//             <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
//             <DateSection
//                 icon="/src/assets/date_icon.svg"
//                 title="Check-in"
//                 date={checkInDate}
//                 subtitle="Select date"
//                 onDateChange={(date) => setCheckInDate(date)}
//             />
//             <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
//             <DateSection
//                 icon="/src/assets/checkout.svg"
//                 title="Check-out"
//                 date={checkOutDate}
//                 subtitle="Select date"
//                 onDateChange={(date) => setCheckOutDate(date)}
//             />

//             <button className="bg-[#3DBBCD] p-3 sm:p-4 rounded-xl w-full sm:w-[70px] sm:h-[70px] md:w-[113px] md:h-[113px] flex items-center justify-center hover:bg-teal-500 mt-4 sm:mt-0">
//               <img
//                 src="/src/assets/search.png"
//                 alt="Search"
//                 className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
//               />
//             </button>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from "../components/footer";

function Home() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);

  const incrementCount = () => {
    setNumberOfPeople(numberOfPeople + 1);
  };

  const decrementCount = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(numberOfPeople - 1);
    }
  };

  const NavItem = ({ text }) => (
    <div className="text-white hover:text-teal-300 cursor-pointer transition-colors duration-300">{text}</div>
  );
  
  const DateSection = ({ icon, title, date, subtitle, onDateChange }) => (
    <div className="flex flex-col w-full sm:w-auto group">
      <div className="flex items-center gap-2 text-gray-600">
        <img src={icon} alt={`${title} icon`} className="w-[24px] sm:w-[28px] md:w-[30px] aspect-[1.25]" />
        <div className="text-xs sm:text-sm md:text-base transition-colors duration-300 group-hover:text-cyan-600">{title}</div>
      </div>
      <div className="mt-1 sm:mt-2 text-base sm:text-lg md:text-2xl font-semibold relative">
        <DatePicker
          selected={date}
          onChange={onDateChange}
          dateFormat="dd/MM/yyyy"
          className="bg-transparent border border-gray-300 p-2 text-gray-700 w-full appearance-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300 rounded-lg"
        />
        <svg className="w-6 h-6 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-300 group-hover:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
      <div className="mt-1 text-xs sm:text-sm md:text-xl text-gray-400">{subtitle}</div>
    </div>
  );

  const PeopleSection = ({ icon, title, subtitle }) => (
    <div className="flex flex-col w-full sm:w-auto group">
      <div className="flex items-center gap-2 text-gray-600">
        <img src={icon} alt={`${title} icon`} className="w-[24px] sm:w-[28px] md:w-[30px] aspect-[1.25]" />
        <div className="text-xs sm:text-sm md:text-base transition-colors duration-300 group-hover:text-cyan-600">{title}</div>
      </div>
      <div className="mt-1 sm:mt-2 text-base sm:text-lg md:text-2xl font-semibold">
        <div className="inline-flex items-center justify-between bg-gray-200 rounded-lg px-3 py-2 transition-all duration-300 group-hover:bg-gray-300">
          <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 text-xl w-8 h-8 flex items-center justify-center" onClick={decrementCount}>-</button>
          <span className="text-gray-900 font-bold mx-4">{numberOfPeople}</span>
          <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 text-xl w-8 h-8 flex items-center justify-center" onClick={incrementCount}>+</button>
        </div>
      </div>
      <div className="mt-1 text-xs sm:text-sm md:text-xl text-gray-400">{subtitle}</div>
    </div>
  );
  const navItems = [
    { text: "Testimonials" },
    { text: "About us" },
    { text: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0F1A29] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/bg_main.png"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#0F1A29] opacity-50"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="p-3 sm:p-5 md:p-6">
          <nav className="flex flex-col sm:flex-row justify-between items-center">
            <img
              src={'/src/assets/logo.png'}
              alt="Mid Orchard Logo"
              className="w-[50px] sm:w-[70px] md:w-[90px] h-auto mb-3 sm:mb-0"
            />
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 md:gap-8 lg:gap-32">
              {navItems.map((item, index) => (
                <NavItem key={index} text={item.text} />
              ))}
              <button className="bg-[#3DBBCD] text-white px-3 sm:px-5 py-1.5 sm:py-2 md:px-6 md:py-2 rounded-xl hover:bg-teal-500 mt-2 sm:mt-0 text-sm sm:text-base w-full sm:w-auto transition-colors duration-300">
                LOGIN
              </button>
            </div>
          </nav>
        </header>

        <main className="px-4 sm:px-8 md:px-20 py-6 sm:py-10 md:py-16 flex-grow flex flex-col justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            Hotel for <span className="text-[#3DBBCD] font-aguafina text-3xl sm:text-5xl md:text-7xl">memorable</span>
            <br />
            moments rich in
            <br />
            emotions
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl mb-6 sm:mb-8">
            Enjoy mesmerizing views of the
            <br />
            valley with a peaceful and
            <br />
            Luxurious stay
          </p>
          <button className="bg-[#3DBBCD] text-white px-4 sm:px-7 py-2 sm:py-2.5 md:px-8 md:py-3 rounded-xl hover:bg-teal-500 text-sm sm:text-base self-start transition-colors duration-300">
            BOOK NOW
          </button>
        </main>

        <section className="bg-white text-black rounded-t-[36px] sm:rounded-tl-[72px] md:rounded-tl-[108px] p-4 sm:p-8 md:p-12 w-full sm:w-[85%] md:w-[75%] max-w-[1200px] self-end">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
            <PeopleSection
              icon="/src/assets/profile_icon.svg"
              title="Guests"
              subtitle="Add Guests"
            />
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="/src/assets/date_icon.svg"
              title="Check-in"
              date={checkInDate}
              subtitle="Select date"
              onDateChange={(date) => setCheckInDate(date)}
            />
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="/src/assets/checkout.svg"
              title="Check-out"
              date={checkOutDate}
              subtitle="Select date"
              onDateChange={(date) => setCheckOutDate(date)}
            />
            <button className="bg-[#3DBBCD] p-3 sm:p-4 rounded-xl w-full sm:w-[70px] sm:h-[70px] md:w-[113px] md:h-[113px] flex items-center justify-center hover:bg-teal-500 mt-4 sm:mt-0 transition-colors duration-300">
              <img
                src="/src/assets/search.png"
                alt="Search"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;