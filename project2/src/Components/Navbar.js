import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black md:border-b border-gray-700 px-4 h-[60px]">
      {/* Desktop Version */}
      <div className="hidden md:flex items-center gap-8">
        
        <img src="/image.png" alt="Company Logo" className="h-9 w-10" />
        <span className="text-white text-[18px]">Vertxlabs, Inc</span>
      </div>
      <div className="hidden md:flex items-center h-full">
        <div className="flex items-center border-l border-gray-700 h-full mr-[970px]">
          <span className="text-white text-lg font-medium px-6 h-full flex items-center">
            Profile&nbsp;
          </span>
        </div>
        <button className="px-5 h-full flex items-center border-r border-l border-gray-700">
          Activity
        </button>
        <button className="px-4 h-full flex items-center">
          Log out
        </button>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex items-center justify-between w-full">

        <div className="w-8 h-8 rounded-full bg-gray-600">
        <img src="/profile.png" alt="Profile" className="h-8 w-10 rounded-full" />
        </div>
        
        <img 
          src="/logo.png" 
          alt="Company Logo" 
          className="h-8 w-8 mx-auto" 
        />
        
        <button className="text-gray-400 hover:text-white">
          <BsThreeDotsVertical style={{ fontSize: "24px", width: "30px", height: "25px" }}/>
        
        </button>
      </div>
    </nav>
  );
};

export default Navbar;