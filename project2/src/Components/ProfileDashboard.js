import React from 'react';
import OverviewSection from './OverviewSection';


const ProfileDashboard = () => {
  return (
    <div className="border-l border-gray-700 h-[calc(100vh-60px)]">
      {/* Desktop Navigation (original code) */}
      <div className="hidden md:flex items-center justify-between border-b border-gray-700 h-[40px] md:h-[50px]">
        <div className="flex items-center h-full overflow-x-auto">
          <span className="pl-2 pr-3 md:pr-5 h-full flex items-center border-r border-gray-700 ml-1 md:ml-3 text-sm md:text-base">
            Overview
          </span>
          <span className="px-2 md:px-6 h-full flex items-center border-r border-gray-700 text-[#555555] text-sm md:text-base">
            Portfolio
          </span>
          <span className="px-2 md:px-6 h-full flex items-center border-r border-gray-700 text-[#555555] text-sm md:text-base">
            Experience
          </span>
          <span className="px-2 md:px-8 h-full flex items-center border-r border-gray-700 text-[#555555] text-sm md:text-base">
            Media
          </span>
        </div>
        <button className="px-3 md:px-6 h-full flex items-center border-l border-gray-700 mr-2 md:mr-4 text-sm md:text-base">
          More
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-center border-b border-gray-700 h-[50px]">
        <div className="flex items-center h-full overflow-x-auto">
          <span className="relative px-4 h-full flex items-center text-sm text-white border-b-2 border-white">
            Overview
          </span>
          <span className="px-4 h-full flex items-center text-sm text-[#555555]">
            Portfolio
          </span>
          <span className="px-4 h-full flex items-center text-sm text-[#555555]">
            Experience
          </span>
          <span className="px-4 h-full flex items-center text-sm text-[#555555]">
            Media
          </span>

        </div>
      </div>


      <div className="bg-[#1D1D1D] px-2 md:px-4 h-[calc(100%-40px)] md:h-[calc(100%-50px)] overflow-auto">
        <div className="mx-2 md:mx-4 lg:mx-8 mb-4 md:mb-8">
          {/* <OverviewSection />
          <DemographicsSection /> */}
          <OverviewSection/>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
