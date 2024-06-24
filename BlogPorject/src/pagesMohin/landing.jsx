import * as React from "react";

const NavItem = ({ text }) => (
  <div className="text-white hover:text-teal-300 cursor-pointer text-sm sm:text-base py-1">{text}</div>
);

const DateSection = ({ icon, title, date, subtitle }) => (
  <div className="flex flex-col w-full sm:w-auto">
    <div className="flex items-center gap-2 text-gray-600">
      <img src={icon} alt={`${title} icon`} className="w-[24px] sm:w-[28px] md:w-[30px] aspect-[1.25]" />
      <div className="text-xs sm:text-sm md:text-base">{title}</div>
    </div>
    <div className="mt-1 sm:mt-2 text-base sm:text-lg md:text-2xl font-semibold">{date}</div>
    <div className="mt-1 text-xs sm:text-sm md:text-xl text-gray-400">{subtitle}</div>
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
              <button className="bg-[#3DBBCD] text-white px-3 sm:px-5 py-1.5 sm:py-2 md:px-6 md:py-2 rounded-xl hover:bg-teal-500 mt-2 sm:mt-0 text-sm sm:text-base w-full sm:w-auto">
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
          <button className="bg-[#3DBBCD] text-white px-4 sm:px-7 py-2 sm:py-2.5 md:px-8 md:py-3 rounded-xl hover:bg-teal-500 text-sm sm:text-base self-start">
            BOOK NOW
          </button>
        </main>

        <section className="bg-white text-black rounded-t-[36px] sm:rounded-tl-[72px] md:rounded-tl-[108px] p-4 sm:p-8 md:p-12 w-full sm:w-[85%] md:w-[75%] max-w-[1200px] self-end">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
            <DateSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fcee80c442d495f3e2984855209d21795cde60e17afd82b976ac54989542dbaf?apiKey=378b307ec7f2406f9bd824321d02b92d&"
              title="Guests"
              date="3 Person"
              subtitle="2 Adult, 1 Child"
            />
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a38a8b5316a9a147f026c723fccf8bb345bc9592880dae89f6edb2e51fb24369?apiKey=378b307ec7f2406f9bd824321d02b92d&"
              title="Check-in"
              date="16 June 2024"
              subtitle="Select date"
            />
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <DateSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/118191653d9cff03e04460748ad63718de44c11712cc5c183609d7f1408c5245?apiKey=378b307ec7f2406f9bd824321d02b92d&"
              title="Check-out"
              date="20 June 2024"
              subtitle="Select date"
            />
            <button className="bg-[#3DBBCD] p-3 sm:p-4 rounded-xl w-full sm:w-[90px] sm:h-[90px] md:w-[113px] md:h-[113px] flex items-center justify-center hover:bg-teal-500 mt-4 sm:mt-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9783835b7c4b9ae2e1617f267a2c350a0e7664f128e29331fd58f392f791d52e?apiKey=378b307ec7f2406f9bd824321d02b92d&"
                alt="Search"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyComponent;