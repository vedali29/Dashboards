import React, { useState } from "react";
import { FaRegBell, FaUser, FaCog } from "react-icons/fa"; 
import { MdOutlineDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { ImEarth } from "react-icons/im";
import { TbVirus } from "react-icons/tb";

const menuIcons = {
  Dashboard: <MdOutlineDashboard />,
  Analytics: <SiGoogleanalytics />,
  Connect: <ImEarth/>,
  Activity: <FaRegBell />,
  Dealroom: <TbVirus />,
  Profile: <FaUser />,
  Settings: <FaCog />,
};

const Sidebar = ({ onSelect }) => {
  const menuItems = ["Dashboard", "Analytics", "Connect", "Dealroom", "Profile", "Settings"];
  const mobileMenuItems = ["Dashboard", "Analytics", "Connect", "Activity", "Dealroom"];
  const [activeItem, setActiveItem] = useState("Analytics");

  return (
    <>
      {/* Desktop Sidebar */}
<div className="hidden md:flex h-[calc(100vh-60px)] w-64 bg-black">

  <div className="w-1/4 flex flex-col items-center p-4 border-r border-gray-700">

  <div className="space-y-4">
    {/* First Profile */}
    <div className="relative pb-4 border-b border-gray-700 w-[65px]">
      <div className="relative rounded-full w-9 h-9 border-2 border-white bg-white mx-auto">
        <div className="absolute w-3 h-3 bg-[#01754F] rounded-full bottom-0 right-[-10%]"></div>
      </div>
    </div>

    {/* Second Profile */}
    <div className="relative pb-4 border-b border-gray-700 w-[65px]">
      <div className="relative rounded-full w-9 h-9 border-2 border-white bg-white mx-auto">
        <div className="absolute w-3 h-3 bg-[#8B3A08] rounded-full bottom-0 right-[-10%]"></div>
      </div>
    </div>

    {/* Third Profile */}
    <div className="pb-4 border-b border-gray-700 w-[65px]">
      <div className="relative rounded-full w-9 h-9 border-2 border-white bg-white mx-auto">
        <div className="absolute w-3 h-3 bg-[#01754F] rounded-full bottom-0 right-[-10%]"></div>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-auto w-[65px] border-t border-gray-700 text-center">
    <button className="text-white text-2xl p-5 w-full"></button>
  </div>
</div>

        
        {/* Right Section - Navigation Menu */}
        <div className="w-3/4 flex flex-col px-4">
          <nav className="flex-1 mt-1">
            {menuItems.map((item) => (
              <button
                key={item}
                className={`w-full text-left px-6 py-3 font-medium transition-all text-[#555555]
                  `}
                onClick={() => {
                  setActiveItem(item);
                  onSelect(item);
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 z-20">
  <div className="flex scrollbar-hide py-2 mx-4  justify-center">
    {mobileMenuItems.map((item, index) => (
      <button
        key={item}
        className="flex-1 min-w-[80px] p-2 text-center"
        onClick={() => {
          setActiveItem(item);
          onSelect(item);
        }}
      >
        <div className="flex flex-col items-center justify-center mx-2"> 
          {/* Added margin to each icon */}
          <span className="text-white text-[8px] mb-1">
            {React.cloneElement(menuIcons[item], {
              className: "w-8 h-8", // Consistent icon size
            })}
          </span>
          <span className="text-white text-[10px] font-medium">{item}</span>
        </div>
      </button>
    ))}
  </div>
</div>



    </>
  );
};

export default Sidebar;