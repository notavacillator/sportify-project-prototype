import React from "react";

const Header = () => (
  <header className="bg-neo-brutalism-900 py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Logo</h1>
        <nav className="font-bold text-sm text-white">
          <a className="px-4 hover:underline" href="!#">Home</a>
          <a className="px-4 hover:underline" href="!#">About</a>
          <a className="px-4 hover:underline" href="!#">Features</a>
          <a className="px-4 hover:underline" href="!#">Testimonials</a>
          <a className="px-4 hover:underline" href="!#">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;