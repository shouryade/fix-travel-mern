import React, { useState, useEffect } from "react";

// Import your local images here
import image1 from '/src/assets/images_villa/img1.jpg';
import image2 from '/src/assets/images_villa/img2.jpg';
import image3 from '/src/assets/images_villa/img3.jpg';
import image4 from '/src/assets/images_villa/img4.jpg';
import image5 from '/src/assets/images_villa/img5.jpg';
import image6 from '/src/assets/images_villa/img6.jpg';
import image7 from '/src/assets/images_villa/img7.jpg';
import image8 from '/src/assets/images_villa/img8.jpg';
import image9 from '/src/assets/images_villa/img9.jpg';
import image10 from '/src/assets/images_villa/img10.jpg';
import image11 from '/src/assets/images_villa/img11.jpg';
import image12 from '/src/assets/images_villa/img12.jpg';
import image13 from '/src/assets/images_villa/img13.jpg';
import image14 from '/src/assets/images_villa/img14.jpg';
import image15 from '/src/assets/images_villa/img15.jpg';
import image16 from '/src/assets/images_villa/img16.jpg';
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
  const images = [image8, image2, image3, image4, image5, image6, image7, image1, image9, image10, image11, image12, image13, image14, image15, image16];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/villaenq');
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50" 
        style={{backgroundImage: "url('/src/assets/images_sd/bg.png')"}}
      ></div>
      
      <div className="relative z-10">
        <header className="bg-cover bg-center flex flex-col items-center p-8" 
                style={{backgroundImage: "url('/src/assets/images_villa/title_bg.png')"}}>
            <a href="/">
            <img 
            src={logo} 
            alt="Logo" 
            className="w-32 mb-4 transition-transform duration-300 transform hover:scale-110" 
          />
            
            </a>
          
          <h1 className="text-4xl text-center">Aangan Villa</h1>
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
                <AmenityItem text="3 Bedrooms" />
                <AmenityItem text="3 Bathrooms" />
                <AmenityItem text="Library Attic Room" />
                <AmenityItem text="Kitchen with Supplies" />
                <AmenityItem text="Glassroom" />
                <AmenityItem text="Fireplace" />
                <AmenityItem text="Large Living Space" />
                <AmenityItem text="Personal Assistant" />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="p-4 rounded transition-all duration-300 transform hover:scale-105 text-2xl">
              Modern Villa constructed primarily out of premium wood and stone. Located amidst Apple and Plum Orchards, offering stunning views of valley, mountains and paragliders. Villa also features warm and cozy interiors with wooden flooring, ceiling and furniture along with huge balconies, large living space and fireplace.
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
      <Footer/>
    </div>
  );
}

export default MyComponent;