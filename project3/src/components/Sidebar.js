import React, { useState } from "react";
import { FaRegBell, FaUser, FaCog } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { ImEarth } from "react-icons/im";
import { TbVirus } from "react-icons/tb";

const menuIcons = {
  Dashboard: <MdOutlineDashboard />,
  Analytics: <SiGoogleanalytics />,
  Connect: <ImEarth />,
  Activity: <FaRegBell />,
  Dealroom: <TbVirus />,
  Profile: <FaUser />,
  Settings: <FaCog />,
};

const Sidebar = ({ onSelect }) => {
  const menuItems = ["Dashboard", "Analytics", "Connect", "Dealroom", "Profile", "Settings"];
  const mobileMenuItems = ["Dashboard", "Analytics", "Connect", "Activity", "Dealroom"];
  const [activeItem, setActiveItem] = useState("Analytics");

  const handleItemClick = (item) => {
    setActiveItem(item);
    onSelect(item);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-[calc(100vh-60px)] w-64 bg-black">
        {/* Left Section - Profile */}
        <div className="w-1/4 flex flex-col items-center p-4 border-r border-gray-700">
          <div className="rounded-full w-10 h-10 bg-gray-700 mb-2 overflow-hidden">
            <img src="/profile.png" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
          </div>
          <div className="mt-auto w-[65px] border-t border-gray-700 text-center">
            <button className="text-white text-2xl p-1 w-full hover:bg-gray-800 rounded-md transition-colors">+</button>
          </div>
        </div>
        
        {/* Right Section - Navigation Menu */}
        <div className="w-3/4 flex flex-col px-4">
          <nav className="flex-1 mt-1">
            {menuItems.map((item) => (
              <button
                key={item}
                className={`w-full text-left px-6 py-3 font-medium transition-all rounded-md
                  ${activeItem === item 
                    ? "text-white bg-gray-900" 
                    : "text-[#555555] hover:text-white hover:bg-gray-900/30"}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 z-20">
        <div className="flex overflow-x-auto scrollbar-hide py-2 justify-between px-2">
          {mobileMenuItems.map((item) => (
            <button
              key={item}
              className={`flex-1 min-w-[60px] p-2 ${activeItem === item ? "text-white" : "text-gray-500"}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-xl mb-1">
                  {React.cloneElement(menuIcons[item], {
                    className: `w-5 h-5 ${activeItem === item ? "text-white" : "text-gray-500"}`
                  })}
                </div>
                <span className="text-[10px] font-medium">{item}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
