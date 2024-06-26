import * as React from "react";

const RoomCard = ({ imageSrc, title, buttonText }) => (
  <div className="relative overflow-hidden aspect-[0.95] group">
    <img
      loading="lazy"
      src={imageSrc}
      alt=""
      className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-opacity-60">
      <h3 className="text-white text-xl font-semibold mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {title}
      </h3>
      <button className="bg-teal-400 text-white text-sm font-medium py-2 px-4 rounded-md self-start flex items-center transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-teal-500">
        <span>{buttonText}</span>
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

function MyComponent() {
  const rooms = [
    {
      imageSrc: "/src/assets/aangan-villa.png",
      title: "Aangan Villa",
      buttonText: "Know More",
    },
    {
      imageSrc: "/src/assets/aangan-homes.png",
      title: "Aangan Homestays",
      buttonText: "Know More",
    },
  ];

  return (
    <div className="bg-slate-800 bg-opacity-100 min-h-screen">
      <main className="container mx-auto px-7 py-3.5 relative">
        <img
          loading="lazy"
          src="/src/assets/bg-manali.png"
          alt=""
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="relative z-10">
          <a href="#" className="block w-[99px] aspect-[1] mb-8 hover:scale-110 transition-transform duration-300">
            <img
              loading="lazy"
              src="/src/assets/aangan_logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </a>
          <div className="flex mb-12">
            <div className="w-1/2">
              <h1 className="text-yellow-300 text-6xl font-bold">
                Aangan Villa & Homes<br />
                by Mid Orchard,<br />
                Manali
              </h1>
            </div>
            <div className="w-1/2 flex items-center">
              <p className="text-stone-300 text-3xl tracking-[2.1px] mt-0">
                Welcome to our distinguished property 
                nestled amidst picturesque mountains, where luxury meets unparalleled hospitality.
                We are dedicated to curating an unforgettable experience for every guest,
                ensuring your stay is filled with comfort, elegance, and lasting memories.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {rooms.map((room, index) => (
              <div key={index} className="col-span-1">
                <RoomCard {...room} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyComponent;
