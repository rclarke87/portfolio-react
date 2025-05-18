import React from "react";

const hero = () => {
  return (
    <div className="relative text-white">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="Build with Rutger Clarke."
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-teal-500 to-cyan-500 opacity-80"></div>
      {/* Dark overlay for better text contrast (optional, adjust opacity as needed) */}
      <div className="absolute inset-0 bg-gray-800 opacity-25"></div>

      {/* Content Container - Centers and spaces all hero content */}
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center">
        {/* Main Heading Block - Contains the three primary headlines */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block text-yellow-200">Build a little awe.</span>
            <span className="block mt-2">Connect with audience.</span>
            <span className="block mt-2">Empower community.</span>
          </h1>

          {/* Visual divider to separate headline from supporting text */}
          <div className="w-24 h-1 bg-yellow-200 mx-auto my-8"></div>

          {/* Subheading with mission statement and value proposition */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            <strong>Do you work to make the world a better place? </strong>
            Browse my portfolio to see how I've empowered charities, community
            groups & independent business. If you're passionate about making a
            difference and need a digital hand, let's talk about how we can
            collaborate.
          </p>
        </div>

        {/* Call-to-Action Buttons - Stack vertically on mobile, horizontally on larger screens */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <a
            href="#projects"
            className="bg-yellow-200 hover:bg-yellow-100 hover:border hover:border-yellow-300 text-gray-800 font-bold py-3 px-8 rounded-2xl text-center"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 border-2 border-white rounded-2xl transition duration-300 text-center"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
