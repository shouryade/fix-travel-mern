import React, { useState, useEffect } from "react";

// Import your local images here
import image1 from '/src/assets/images_homes/img1.jpg';
import image2 from '/src/assets/images_homes/img2.jpg';
import image3 from '/src/assets/images_homes/img3.jpg';
import image4 from '/src/assets/images_homes/img4.jpg';
import image5 from '/src/assets/images_homes/img5.jpg';
import image6 from '/src/assets/images_homes/img6.jpg';
import image7 from '/src/assets/images_homes/img7.jpg';
import image8 from '/src/assets/images_homes/img8.jpg';
import image9 from '/src/assets/images_homes/img9.jpg';
import image10 from '/src/assets/images_homes/img10.jpg';
import checkmarkIcon from '/src/assets/check.png';
import logo from '/src/assets/aangan_logo.png';
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const AmenityItem = ({ text }) => (
  <div className="flex items-center gap-2 p-2 rounded transition-all duration-300 transform hover:scale-105">
    <img src={checkmarkIcon} alt="Checkmark" className="w-5 h-5" />
    <span>{text}</span>
  </div>
);

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Room view ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
      >
        &#10094;
      </button>
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

function MyComponent() {
  const images = [image9, image2, image3, image4, image5, image6, image7, image8, image1, image10];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/homesenq');
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50" 
        style={{backgroundImage: "url('/src/assets/images_sd/bg.png')"}}
      ></div>
      
      <div className="relative z-10">
        <header className="bg-cover bg-center flex flex-col items-center p-8" 
                style={{backgroundImage: "url('/src/assets/images_homes/title_bg.png')"}}>
          <a href="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-32 mb-4 transition-transform duration-300 transform hover:scale-110" 
          />
          </a>
          
          <h1 className="text-4xl text-center">Aangan Homes</h1>
        </header>
        
        <main className="max-w-7xl mx-auto p-8">
          <ImageCarousel images={images} />
          
          <div className="flex justify-between mt-6 mb-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-2xl transition-transform duration-300 transform hover:scale-110">⭐</span>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-6xl mb-6 mt-16">Amenities</h2>
              <div className="grid grid-cols-2 gap-4 text-3xl text-[#D9D9D9]">
                <AmenityItem text="Attached Bathrooms" />
                <AmenityItem text="On-site Parking" />
                <AmenityItem text="Table & Chairs" />
                <AmenityItem text="Private Balcony" />
                <AmenityItem text="Wifi" />
                <AmenityItem text="Common Kitchen" />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="p-4 rounded transition-all duration-300 transform hover:scale-105 text-2xl">
              Indulge in opulence with our Luxury Room featuring a private balcony and mesmerizing river views. Immerse yourself in unparalleled comfort, surrounded by lavish furnishings and modern amenities. Bask in the serenity of nature while relishing the exquisite experience of our premium accommodations, where luxury meets the tranquility of a scenic riverside retreat.
              </p>
              <div className="mt-6">
                <div className="text-4xl p-4 rounded transition-all duration-300 transform hover:scale-105">
                  FARE DETAILS
                  <span className="text-2xl text-[#D9D9D9] block">XXXXXX</span>
                </div>
                <button onClick={handleClick} className="bg-cyan-500 text-white py-3 px-40 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 mt-4">
                  CHECK AVAILABILITY
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MyComponent;