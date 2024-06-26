import * as React from "react";

const RoomCard = ({ imageSrc, title, buttonText }) => (
  <div className="relative overflow-hidden aspect-square group">
    <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-opacity-60">
      <h3 className="text-white text-2xl font-semibold mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{title}</h3>
      <button className="bg-teal-400 text-white text-sm font-medium py-2 px-4 rounded-md self-start flex items-center transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-teal-500">
        <span>{buttonText}</span>
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

function MyComponent() {
  const rooms = [
    {
      imageSrc: "/src/assets/super-deluxe.png",
      title: "Super Deluxe Room With Balcony & Mountain View",
      buttonText: "Know More"
    },
    {
      imageSrc: "/src/assets/luxury.png",
      title: "Luxury Room With Balcony & River View",
      buttonText: "Know More"
    },
    {
      imageSrc: "/src/assets/family.png",
      title: "Family Suite",
      buttonText: "Know More"
    }
  ];

  return (
    <div className="bg-slate-800 bg-opacity-100 min-h-screen">
      <main className="container mx-auto px-7 py-3.5 relative">
        <img loading="lazy" src="/src/assets/bg-kasol.png" alt="" className="object-cover absolute inset-0 w-full h-full" />
        <div className="relative z-10">
        <a href="#" className="block w-[99px] aspect-[1] mb-8 hover:scale-110 transition-transform duration-300">
            <img
              loading="lazy"
              src="/src/assets/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
            </a>
          <div className="flex mb-12">
            <div className="w-1/2">
              <h1 className="text-yellow-300 text-6xl font-bold">
                MID ORCHARD<br />
                KASOL<br />
                RIVERSIDE
              </h1>
            </div>
            <div className="w-1/2 flex items-center">
              <p className="text-stone-300 text-3xl tracking-[2.1px]">
                Here At Mid Orchard, Kasol - We Take Pride In Providing Our Guests With The Highest Quality And Very Personal Service So We Can Emulate What It's Like To Be At Home.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyComponent;