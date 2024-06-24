// import * as React from "react";

// const NavItem = ({ text }) => (
//   <div className="text-white hover:text-teal-300 cursor-pointer">{text}</div>
// );

// const DateSection = ({ icon, title, date, subtitle }) => (
//   <div className="flex flex-col">
//     <div className="flex items-center gap-2 text-gray-600">
//       <img src={icon} alt={`${title} icon`} className="w-[30px] aspect-[1.25]" />
//       <div>{title}</div>
//     </div>
//     <div className="mt-2 text-2xl font-semibold">{date}</div>
//     <div className="mt-1 text-xl text-gray-400">{subtitle}</div>
//   </div>
// );

// function MyComponent() {
//   const navItems = [
//     { text: "Testimonials" },
//     { text: "About us" },
//     { text: "Contact" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0F1A29] text-white relative overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1b3240265d862d6600bf742c24a5a7a24db2810a0de931fb5d94627a4385df?apiKey=378b307ec7f2406f9bd824321d02b92d&"
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-[#0F1A29] opacity-50"></div>
//       </div>
      
//       <div className="relative z-10 h-screen flex flex-col">
//       <header className="p-6">
//   <nav className="flex justify-between items-center">
//     <img
//       src= "../assets/logo.png" // Replace with the actual path to the logo image
//       alt="Mid Orchard Logo"
//       className="w-[120px] h-auto" // Adjust size as needed
//     />
//     <div className="flex gap-8 items-center">
//       {navItems.map((item, index) => (
//         <NavItem key={index} text={item.text} />
//       ))}
//       <button className="bg-[#3DBBCD] text-white px-6 py-2 rounded-xl hover:bg-teal-500">
//         LOGIN
//       </button>
//     </div>
//   </nav>
// </header>

//         <main className="px-20 py-16 flex-grow">
//           <h1 className="text-6xl font-bold mb-4">
//             Hotel for <span className="text-[#3DBBCD] italic font-aguafina text-7xl ">memorable</span>
//             <br />
//             moments rich in
//             <br />
//             emotions
//           </h1>
//           <p className="text-2xl mb-8 font-abyssinica">
//             Enjoy mesmerizing views of the
//             <br />
//             valley with a peaceful and
//             <br />
//             Luxurious stay
//           </p>
//           <button className="bg-[#3DBBCD] text-white px-8 py-3 rounded-xl hover:bg-teal-500">
//             BOOK NOW
//           </button>
//         </main>

//         <section className="absolute bottom-0 right-0 bg-white text-black rounded-tl-[108px] p-12 w-[75%] max-w-[1200px]">
//           <div className="flex justify-between items-end">
//             <DateSection
//               icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fcee80c442d495f3e2984855209d21795cde60e17afd82b976ac54989542dbaf?apiKey=378b307ec7f2406f9bd824321d02b92d&"
//               title="Guests"
//               date="3 Person"
//               subtitle="2 Adult, 1 Child"
//             />
//             <div className="w-px h-16 bg-gray-200"></div>
//             <DateSection
//               icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a38a8b5316a9a147f026c723fccf8bb345bc9592880dae89f6edb2e51fb24369?apiKey=378b307ec7f2406f9bd824321d02b92d&"
//               title="Check-in"
//               date="16 June 2024"
//               subtitle="Select date"
//             />
//             <div className="w-px h-16 bg-gray-200"></div>
//             <DateSection
//               icon="https://cdn.builder.io/api/v1/image/assets/TEMP/118191653d9cff03e04460748ad63718de44c11712cc5c183609d7f1408c5245?apiKey=378b307ec7f2406f9bd824321d02b92d&"
//               title="Check-out"
//               date="20 June 2024"
//               subtitle="Select date"
//             />
//             <button className="bg-[#3DBBCD] p-4 rounded-xl w-[113px] h-[113px] flex items-center justify-center">
//               <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/9783835b7c4b9ae2e1617f267a2c350a0e7664f128e29331fd58f392f791d52e?apiKey=378b307ec7f2406f9bd824321d02b92d&"
//                 alt="Search"
//                 className="w-10 h-10"
//               />
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default MyComponent;

import * as React from "react";

const NavItem = ({ text }) => (
  <div className="text-white hover:text-teal-300 cursor-pointer">{text}</div>
);

const DateSection = ({ icon, title, date, subtitle }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2 text-gray-600">
      <img src={icon} alt={`${title} icon`} className="w-[30px] aspect-[1.25]" />
      <div>{title}</div>
    </div>
    <div className="mt-2 text-2xl font-semibold">{date}</div>
    <div className="mt-1 text-xl text-gray-400">{subtitle}</div>
  </div>
);

function MyComponent() {
  const navItems = [
    { text: "Testimonials" },
    { text: "About us" },
    { text: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0F1A29] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1b3240265d862d6600bf742c24a5a7a24db2810a0de931fb5d94627a4385df?apiKey=378b307ec7f2406f9bd824321d02b92d&"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#0F1A29] opacity-50"></div>
      </div>
      
      <div className="relative z-10 h-screen flex flex-col">
        <header className="p-6">
          <nav className="flex justify-between items-center">
            <img
              src="../assets/logo.png" // Replace with the actual path to the logo image
              alt="Mid Orchard Logo"
              className="w-[120px] h-auto" // Adjust size as needed
            />
            <div className="flex gap-8 items-center">
              {navItems.map((item, index) => (
                <NavItem key={index} text={item.text} />
              ))}
              <button className="bg-[#3DBBCD] text-white px-6 py-2 rounded-xl hover:bg-teal-500">
                LOGIN
              </button>
            </div>
          </nav>
        </header>

        <main className="px-20 py-16 flex-grow">
          <h1 className="text-6xl font-bold mb-4">
            Hotel for <span className="text-[#3DBBCD] font-aguafina text-7xl">memorable</span>
            <br />
            moments rich in
            <br />
            emotions
          </h1>
          <p className="text-2xl mb-8">
            Enjoy mesmerizing views of the
            <br />
            valley with a peaceful and
            <br />
            Luxurious stay
          </p>
          <button className="bg-[#3DBBCD] text-white px-8 py-3 rounded-xl hover:bg-teal-500">
            BOOK NOW
          </button>
        </main>

        <section className="absolute bottom-0 right-0 bg-white text-black rounded-tl-[108px] p-12 w-[75%] max-w-[1200px]">
          <div className="flex justify-between items-end">
            <DateSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fcee80c442d495f3e2984855209d21795cde60e17afd82b976ac54989542dbaf?apiKey=378b307ec7f2406f9bd824321d02b92d&"
              title="Guests"
              date="3 Person"
              subtitle="2 Adult, 1 Child"
            />
            <div className="w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a38a8b5316a9a147f026c723fccf8bb345bc9592880dae89f6edb2e51fb24369?apiKey=378b307ec7f2406f9bd824321d02b92d&"
              title="Check-in"
              date="16 June 2024"
              subtitle="Select date"
            />
            <div className="w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/118191653d9cff03e04460748ad63718de44c11712cc5c183609d7f1408c5245?apiKey=378b307ec7f2406f9bd824321d02b92d&"
              title="Check-out"
              date="20 June 2024"
              subtitle="Select date"
            />
            <button className="bg-[#3DBBCD] p-4 rounded-xl w-[113px] h-[113px] flex items-center justify-center hover:bg-teal-500">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9783835b7c4b9ae2e1617f267a2c350a0e7664f128e29331fd58f392f791d52e?apiKey=378b307ec7f2406f9bd824321d02b92d&"
                alt="Search"
                className="w-8 h-8"
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyComponent;

