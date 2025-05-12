import React from "react";

const about = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="grid grid-cols-8 md:grid-cols-8 sm:grid-cols-2 gap-2 items-center">
        {/* Text Column */}
        <div class="col-span-6">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4">
            <p className="text-xl">
              I'm a team leader, systems thinker and front-end developer with a
              passion for building functional, user-friendly applications. With
              a background in life sciences and project management, I bring a
              solid grasp of complex projects, enjoy big-picture thinking and
              excel at communicating technical topics clearly. I'm currently
              focused on mastering Tailwind and React, while staying curious and
              committed to continuous learning.
            </p>

            <p className="text-xl mt-4">
              Beyond work, I have too many hobbies and interestes to count,
              there's self-hosting, data science, machine learning and creating
              tools that tackle real-world problems. When I'm not coding, you’ll
              likely find me tinkering with microcontrollers, brewing beer,
              experimenting with Linux or diving into my next big side project.
              I love a good challenge and thrive when collaborating with people
              who care about thoughtful design and writing code that makes a
              difference.
            </p>
          </div>
        </div>

        {/* Photo Column */}
        <div className="col-span-2 flex justify-center items-center">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="rounded-[100%] shadow-lg/50 h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
