import React from 'react';


// Add prominent neo brutalism design and two hero sections join and create sport event. 


const LandingPage = () => {
  return (
    <div className="relative bg-neo-brutalism-100 h-screen">
      <svg
        className="absolute bottom-0 left-0 right-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2c3e50"
          fill-opacity="1"
          d="M0,224L80,224C160,224,320,224,480,218.7C640,213,800,203,960,197.3C1120,192,1280,192,1360,197.3L1440,203L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="relative z-10 py-32 px-8">
        <h1 className="text-6xl font-bold text-neo-brutalism-900">
          Welcome to our Sport Enthusiast Web Application
        </h1>
        <p className="text-lg text-neo-brutalism-700 mt-8">
          Create or join local sport events like badminton and cricket, find events in a map, and register with ease.
        </p>
        <div className="mt-16 flex">
          <a
            href="!#"
            className="w-1/2 bg-neo-brutalism-900 hover:bg-neo-brutalism-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg mr-2"
          >
            Join Sport Event
          </a>
          <a
            href="www.google.com"
            className="w-1/2 bg-neo-brutalism-900 hover:bg-neo-brutalism-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg ml-2"
          >
            Create Sport Event
          </a>

        </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#000000" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,208C640,203,800,149,960,138.7C1120,128,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>

      </div>
    </div>
  );
};

export default LandingPage;


