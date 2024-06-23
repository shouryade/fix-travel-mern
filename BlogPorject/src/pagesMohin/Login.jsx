import React from "react";

const Button = ({ children, className, icon, ...props }) => (
  <button
    className={`flex justify-center items-center px-4 py-3 rounded-md w-full transition-all duration-300 hover:scale-105 ${className}`}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const InputField = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block font-bold text-white mb-2 text-left">{label}</label>
    <input
      className="w-full px-3 py-2 rounded-md border-2 border-white border-opacity-50 text-white bg-transparent placeholder-white placeholder-opacity-50 transition-transform duration-300 hover:scale-105"
      {...props}
    />
  </div>
);

const MyComponent = () => (
  <main className="min-h-screen bg-slate-800 relative flex items-center justify-center p-4">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/075d06b05282010f0366dfa3354a8faa40c5ecab72838d66cb0698dc1250d724?apiKey=378b307ec7f2406f9bd824321d02b92d&"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl text-white leading-tight acme-font">
          You're just one step away from embarking on a remarkable{" "} </h1>
          <span className="text-teal-400 anton-font text-8xl">Adventure</span>
        
      </div>
      <div className="lg:w-1/2 w-full max-w-md">
        <form className="bg-black bg-opacity-60 rounded-xl border border-white border-opacity-20 p-6 text-lg">
          <h2 className="font-bold text-white text-2xl mb-6 text-left">Log in</h2>
          <Button 
            className="mb-4 border-2 border-white border-opacity-50 text-white"
            icon={<GoogleIcon />}
          >
            <span className="font-medium">Log in with Google</span>
          </Button>
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-white border-opacity-80" />
            <span className="px-3 text-white text-opacity-80">or</span>
            <hr className="flex-grow border-white border-opacity-80" />
          </div>
          <InputField label="Email" type="email" placeholder="Enter Your Email Address" />
          <InputField label="Password" type="password" placeholder="Enter Your Password" />
          <Button className="mt-6 font-bold text-white bg-teal-400 bg-opacity-60 hover:bg-opacity-80">
            Log in
          </Button>
          <div className="text-center text-white mt-6">
            <p>Don't have an account?</p>
            <a href="#" className="font-bold text-teal-400 hover:underline mt-2 inline-block transition-transform duration-300 hover:scale-105">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  </main>
);

export default MyComponent;