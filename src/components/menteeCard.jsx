import React from "react";

const MenteeCard = ({ mentee }) => {
  return (
    <div className="bg-[#2a3044] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img 
        src={mentee.imgURL} 
        alt={`Portrait of ${mentee.name}`} 
        className="w-full h-80 object-cover" 
      />
      <div className="p-6 bg-[#ac6dff]">
        <h3 className="text-xl font-bold text-white">{mentee.name}</h3>
        <p className="text-slate-300 mt-1">{mentee.role}</p>
        <a className="bg-white no-underline px-4 py-2 rounded-md" href="/cohorts/api/first/user">View projects</a>
      </div>
    </div>
  );
};

export default MenteeCard;