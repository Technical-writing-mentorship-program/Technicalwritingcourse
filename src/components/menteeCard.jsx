import React from "react";
import Link from "@docusaurus/Link";

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
        <p className="text-white mt-1">{mentee.role}</p>
        <Link className="px-4 py-2 bg-white text-[#8a4dff] rounded hover:bg-gray-200 transition" to={`/cohorts/mentee/${mentee.slug}`}>View projects</Link>
      </div>
    </div>
  );
};

export default MenteeCard;