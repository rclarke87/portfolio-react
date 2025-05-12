import React from "react";

const header = () => {
  return (
    <header class="bg-white shadow-md fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-between items-center py-5">
          <a href="#" class="text-2xl font-bold text-gray-800">
            Rutger Clarke
          </a>

          {/* Mobile menu */}
          <div
            class="flex flex-col justify-between h-5 w-7 cursor-pointer md:hidden"
            id="mobile-menu"
          >
            <span class="h-0.5 w-full bg-gray-800 rounded-sm"></span>
            <span class="h-0.5 w-full bg-gray-800 rounded-sm"></span>
            <span class="h-0.5 w-full bg-gray-800 rounded-sm"></span>
          </div>

          {/* Navigation Links */}
          <ul class="hidden md:flex items-center space-x-8" id="nav-links">
            <li>
              <a
                href="#about"
                class="font-medium hover:text-white transition-colors px-2 py-2  hover:bg-black hover: rounded-3xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="font-medium hover:text-white transition-colors px-2 py-2  hover:bg-black hover: rounded-3xl"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class="font-medium hover:text-white transition-colors px-2 py-2  hover:bg-black hover: rounded-3xl"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#blog"
                class="font-medium hover:text-white transition-colors px-2 py-2  hover:bg-black hover: rounded-3xl"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="bg-teal-500 text-yellow-50 px-3 py-2 rounded-3xl font-medium hover:bg-cyan-500 transition-colors"
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu (hidden by default) */}
      {/* <div class="hidden bg-white w-full py-3 px-4 shadow-lg md:hidden" id="mobile-nav">
            <ul class="flex flex-col space-y-3">
                <li><a href="#home" class="block font-medium hover:text-blue-600 transition-colors py-2">Home</a></li>
                <li><a href="#about" class="block font-medium hover:text-blue-600 transition-colors py-2">About</a></li>
                <li><a href="#projects" class="block font-medium hover:text-blue-600 transition-colors py-2">Projects</a></li>
                <li><a href="#skills" class="block font-medium hover:text-blue-600 transition-colors py-2">Skills</a></li>
                <li><a href="#contact" class="block bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors w-full text-center mt-2">Contact</a></li>
            </ul>
        </div> */}
    </header>
  );
};

export default header;
