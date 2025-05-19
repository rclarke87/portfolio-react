import React from "react";

const about = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-12" id="about">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-2 items-center">
        {/* Text Column */}
        <div class="md:col-span-6">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4">
            <p className="text-xl">
              Passionate about creating user-friendly, functional applications,
              I enjoy working with teams to turn ideas into well-crafted
              experiences. With a strong foundation in front-end development and
              an eye for systems thinking, I contribute to projects that balance
              technical precision with usability. I’m particularly interested in
              tools like Tailwind and React, and value collaboration, clarity
              and continuous learning in every project.
            </p>

            <p className="text-xl mt-4">
              Outside of coding, I’m drawn to projects that explore real-world
              challenges through technology—whether it’s self-hosting, data
              analysis, or prototyping with microcontrollers. I’m always
              curious, often experimenting, and most energised when working with
              others who value thoughtful design, impactful projects and a
              shared sense of what's possible.
            </p>
          </div>
        </div>

        {/* Photo Column */}
        <div className="md:col-span-2 flex justify-center items-center">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="rounded-[100%] shadow-lg/50 w-48 h-48 object-cover sm:w-32 sm:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
