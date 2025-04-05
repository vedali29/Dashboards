import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaCheckCircle, FaUser } from 'react-icons/fa';

function OverviewSection() {
  return (
    <div className="text-white pb-4">
      {/* Overview Heading */}
      <h1 className="text-2xl md:text-3xl font-medium my-4 md:my-6">
        Overview
      </h1>
      
      {/* Profile Card */}
      <div className="bg-[#111111] rounded-xl p-4 md:p-6 mb-4 md:mb-6 border border-gray-800">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center overflow-hidden">
            <FaUser className="w-20 h-20 md:w-24 md:h-24" />
          </div>
          
          {/* Profile Details */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl md:text-3xl font-semibold">
                Mr A
              </h2>
              <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
            </div>
            
            <p className="text-xs md:text-sm text-gray-300 flex items-center gap-1">
              Co-Founder & CEO @Vertx
              <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full ml-1" />
            </p>
            
            {/* Entrepreneur Badge & Social Icons */}
            <div className="flex flex-row md:flex-col items-center md:items-start justify-between gap-2 md:gap-3 mt-3">
              <span className="bg-white text-[10px] md:text-xs text-gray-900 px-2 py-0.5 rounded inline-block">
                Entrepreneur
              </span>
              <div className="flex gap-2 md:gap-3 mt-0 ml-36 md:ml-0 md:mt-0">
                <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
                  <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  <MdEmail className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Founded Companies Section */}
        <div className="bg-[#111111] rounded-xl p-4 md:p-6 border border-gray-800">
          <h2 className="text-base md:text-lg font-medium mb-2">
            Founded Companies
          </h2>
          <p className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">02</p>
          
          {/* Company Items */}
          <div className="space-y-4">
            {[
              {
                initial: 'V',
                name: 'Vertx',
                role: 'CEO',
                details: 'Founded in 2025, in Fintech.',
                badgeColor: 'bg-green-600'
              },
              {
                initial: 'C',
                name: 'Company',
                role: 'Proprietor',
                details: 'Details/Information like acquired/exit/m&a',
                badgeColor: 'bg-purple-600'
              },
            ].map((company, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">{company.initial}</span>
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{company.name}</h3>
                      <span className={`${company.badgeColor} text-xs px-2 py-0.5 rounded`}>
                        {company.role}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {company.details}
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-white ml-2"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="bg-[#111111] rounded-xl p-4 mb-20 md:mb-0 md:p-6 border border-gray-800">
          <h2 className="text-base md:text-lg font-medium mb-2">Experience</h2>
          <p className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">03</p>
          
          {/* Company entries */}
          <div className="space-y-3 md:space-y-4">
            {[1, 2, 3].map(num => (
              <div key={num} className="flex justify-between items-start mb-2 md:mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-[10px] md:text-xs">C{num}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-medium">
                    Company {num}
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-[10px] md:text-xs text-gray-400 hover:text-white"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewSection;
