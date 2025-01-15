import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/homepageTheme.svg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8">
          <h1 className="text-5xl font-bold mb-4">I am Kunal Singh</h1>
          <p className="text-xl italic mb-4">About Me</p>
          <p className="mt-4 text-center max-w-md text-gray-200">
            A passionate software engineer creating seamless user experiences
            and innovative solutions in web development.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <div className="w-48 h-48 md:w-80 md:h-80">
            <img
              src="/images/kunalavtar.svg"
              alt="Avatar"
              className="rounded-full w-full h-full object-cover border-4 border-gray-500"
            />
          </div>
          {/* Name */}
          <h2 className="text-4xl font-bold text-gray-800 px-10">
            Kunal Singh
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
