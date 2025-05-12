import React from "react";

const hero = () => {
  return (
    <div className="relative bg-radial-[at_50%_50%] from-teal-500 to-cyan-500 text-white">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0"></div>

      {/* Content Container - Centers and spaces all hero content */}
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center">
        {/* Main Heading Block - Contains the three primary headlines */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block text-yellow-200">Build with me.</span>
            <span className="block mt-2">Connect your audience.</span>
            <span className="block mt-2">Empower community.</span>
          </h1>

          {/* Visual divider to separate headline from supporting text */}
          <div className="w-24 h-1 bg-yellow-200 mx-auto my-8"></div>

          {/* Subheading with mission statement and value proposition */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            <strong>
              Do you work with a for social benefit or not for profit?{" "}
            </strong>
            Browse my portfolio to see how I've empowered charities, communities
            & people. If you're passionate about making a difference, let's talk
            about how we can collaborate.
          </p>
        </div>

        {/* Call-to-Action Buttons - Stack vertically on mobile, horizontally on larger screens */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <a
            href="#portfolio"
            className="bg-yellow-200 hover:bg-yellow-100 text-black font-bold py-3 px-8 rounded-2xl transition duration-300 text-center"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-8 border-2 border-white rounded-2xl transition duration-300 text-center"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
