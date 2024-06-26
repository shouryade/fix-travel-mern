import * as React from "react";

function ImageWithOverlay({ src, alt, children }) {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden group">
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

function MyComponent() {
  return (
    <main className="flex flex-col">
      <ImageWithOverlay 
        src={"/src/assets/kasol.png"}
        alt="Mountain landscape with lake"
      >
        <LocationCard
          iconSrc={"/src/assets/logo.png"}
          title="Mid Orchard Kasol- Riverside"
        />
      </ImageWithOverlay>
      
      <ImageWithOverlay 
        src={"/src/assets/manali.png"}
        alt="Mountain landscape at sunset"
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

export default MyComponent;
