import React from "react";

const HeroSection = () => (
  <section className="bg-neo-brutalism-gray-900 py-32" style={{ background: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))", backgroundSize: "50px 50px" }}>
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-neo-brutalism-900">Join Sport Event</h1>
        <p className="text-lg text-neo-brutalism-700 mt-8">
          Find and join local sport events like badminton, cricket and more.
        </p>
        <a
          href="!#"
          className="bg-neo-brutalism-900 hover:bg-neo-brutalism-800 text-white font-bold py-2 px-4 rounded mt-16"
        >
          Join Now
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;

