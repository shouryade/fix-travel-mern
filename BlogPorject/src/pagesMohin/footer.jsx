import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex gap-5 mt-5 text-xl items-center transition-transform transform hover:scale-105">
    {/* Added `transition-transform` and `transform` for zoom effect on hover */}
    <Icon className="w-6 h-6" />
    <span>{text}</span>
  </div>
);

const LegalLink = ({ text }) => (
  <div className="mt-4 transition-transform transform hover:scale-105 hover:text-teal-400">
    {/* Added `transition-transform` and `transform` for zoom effect on hover */}
    {text}
  </div>
);

const MyComponent = () => {
  const contactInfo = [
    { icon: FaPhone, text: "+1012 3456 789" },
    { icon: FaEnvelope, text: "demo@gmail.com" },
  ];

  const legalLinks = ["Legal", "Privacy Policy", "Terms & Services", "Terms of Use", "Refund Policy"];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Example: Implement form validation, send data to backend, etc.
  };

  return (
    <div className="relative flex flex-col min-h-screen text-white bg-black p-12">
      <h1 className="text-5xl mb-8">Contact Us</h1>

      <div className="flex justify-between">
        <section className="flex flex-col">
          {contactInfo.map((info, index) => (
            <ContactInfo key={index} icon={info.icon} text={info.text} />
          ))}
        </section>

        <nav className="mx-8">
          {legalLinks.map((link, index) => (
            <LegalLink key={index} text={link} />
          ))}
        </nav>

        <section className="max-w-lg"> {/* Increased max-width to make the form wider */}
          <form onSubmit={handleSubmit} className="bg-neutral-900 p-8 rounded-xl mb-8 transform transition-transform hover:scale-105">
            {/* Added `transform` and `transition` classes for zoom effect */}
            <h2 className="text-lg font-semibold mb-4">Send A Query</h2>
            <textarea
              className="w-full p-3 bg-stone-900 text-white rounded mb-4"
              placeholder="Write your message..."
              rows="6" // Increased rows for larger box
            ></textarea>
            <button className="w-full py-2 bg-teal-400 rounded-lg text-black font-medium transition-colors duration-300 hover:bg-teal-500">
              Submit
            </button>
            {/* Added `transition-colors` and `hover:` for color transition effect */}
            <p className="mt-4 text-sm">* We will get back to you shortly.</p>
          </form>
        </section>
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4e9cd39b297608fb932a4217c1220c72e62dc2e57fe392522686bc6366b9093?apiKey=378b307ec7f2406f9bd824321d02b92d&"
        alt="Person sitting"
        className="absolute bottom-0 right-0 w-1/4 max-w-xs"
      />
    </div>
  );
};

export default MyComponent;
