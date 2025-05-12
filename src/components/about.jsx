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
              passion for building clean, functional, and user-friendly
              applications. With a background in life-sciences and project
              management, I bring a strong understanding of both technical
              delivery and the big picture. I'm currently focused on mastering
              Tailwind and React, and I'm always learning and exploring new
              technologies.
            </p>

            <p className="text-xl">
              I have a keen interest in self-hosting, task automation, and
              creating tools that solve real-world problems. Outside of coding,
              you'll probably find me brewing beer, geeking out over home
              servers, or chasing my next side project. I'm always up for a
              challenge and enjoy collaborating with others who care about
              thoughtful design and code that can change the world, for the
              better.
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
