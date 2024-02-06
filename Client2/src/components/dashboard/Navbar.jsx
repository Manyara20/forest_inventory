import React from 'react';


const Navbar = () => {
  return (
    <div className="w-full px-6 py-4 flex items-center justify-between bg-gray-800">
      {/* Logo and Title */}
      <div className="flex items-center font-bold text-white">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-white font-extrabold text-lg">Dashboard</span>
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center gap-4">
        {/* Search Icon (visible on larger screens) */}
        <img
          src="/search.svg"
          alt="Search"
          className="hidden sm:block w-6 h-6 text-white cursor-pointer"
        />

        {/* Other Icons */}
        <img src="/app.svg" alt="App" className="w-6 h-6 text-white cursor-pointer" />
        <img src="/expand.svg" alt="Expand" className="w-6 h-6 text-white cursor-pointer" />

        {/* Notifications */}
        <div className="relative">
          <img src="/notifications.svg" alt="Notifications" className="w-6 h-6 cursor-pointer" />
          <span className="bg-red-400 text-white w-4 h-4 rounded-full absolute top-1 right-0 flex items-center justify-center text-xs">
            1
          </span>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="User"
          />
          <span className="font-extrabold text-white">Jane</span>
        </div>

        {/* Settings Icon */}
        <img
          src="/settings.svg"
          alt="Settings"
          className="w-6 h-6 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
