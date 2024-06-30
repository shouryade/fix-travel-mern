import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

function ImageWithOverlay({ src, alt, children, linkTo }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(linkTo);
    window.scrollTo(0, 0);
  };

  return (
    <div 
      onClick={handleClick} 
      className="block relative w-full h-[50vh] overflow-hidden group cursor-pointer"
    >
      <img 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-90" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function LocationCard({ iconSrc, title, subtitle }) {
  return (
    <div className="flex flex-col items-start text-white transition-transform duration-300 group-hover:scale-105">
      <div className="flex items-center">
        <img src={iconSrc} alt="Location icon" className="w-12 h-12 object-contain" />
        <span className="text-4xl font-semibold ml-2">{title}</span>
      </div>
      {subtitle && <span className="text-xl -mt-1 ml-14">{subtitle}</span>}
    </div>
  );
}

function Properties() {
  return (
    <main className="flex flex-col">
      <ImageWithOverlay 
        src={"/src/assets/kasol.png"}
        alt="Mountain landscape with lake"
        linkTo="/kasol"
      >
        <LocationCard
          iconSrc={"/src/assets/logo.png"}
          title="Mid Orchard Kasol- Riverside"
        />
      </ImageWithOverlay>
      
      <ImageWithOverlay 
        src={"/src/assets/manali.png"}
        alt="Mountain landscape at sunset"
        linkTo="/manali"
      >
        <LocationCard
          iconSrc={"/src/assets/aangan_logo.png"}
          title="Aangan By Mid Orchard, Manali"
          subtitle="Villa & Homes"
        />
      </ImageWithOverlay>
    </main>
  );
}

export default Properties;