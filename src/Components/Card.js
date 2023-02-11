import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="bg-neo-brutalism-800 rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-neo-brutalism-100">Sport Event</h2>
      <p className="text-lg text-neo-brutalism-100 mt-4">
        Find and join local sport events like badminton, cricket and more.
      </p>
      <div className="flex mt-8">
        <a
          href="/#"
          className="w-1/2 bg-neo-brutalism-100 hover:bg-neo-brutalism-900 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Join Event
        </a>
        <a
          href="/#"
          className="w-1/2 bg-neo-brutalism-100 hover:bg-neo-brutalism-900 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Create Event
        </a>
      </div>
    </div>
  );
};

export default Card;
