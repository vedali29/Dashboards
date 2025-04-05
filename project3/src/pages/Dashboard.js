import React from "react";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Fixed Navbar */}
      <div className="z-10">
        <Navbar />
      </div>
      
      {/* Content area */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <Sidebar onSelect={(item) => console.log(item)} />
        
        {/* Main Content with mobile padding */}
        <main className="flex-1 pb-16 md:pb-0 overflow-auto">
          <AnalyticsDashboard />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;