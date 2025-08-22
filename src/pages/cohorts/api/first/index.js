import React from "react";
import data from './mentees.json';
import MenteeCard from "../../../../components/menteeCard";

export default function ApiMentees (){
  return (
    <div className="min-h-screen font-sans text-white p-8 md:p-16 lg:p-24">
      <div className="max-w-7xl mx-auto">
        <header className="text-left mb-16 text-black">
          <p className="text-sm text-slate-400 tracking-[0.2em] uppercase mb-4">
            OUR API DOCS MENTEES
          </p>
          <h1 className="text-5xl md:text-6xl font-medium">
            Mentees from the API cohort
          </h1>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((mentee, index) => (
              <MenteeCard key={index} mentee={mentee} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};