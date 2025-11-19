import React, { useState } from "react";

// Dynamic import of all mentees.json files
const menteesContext = require.context(
  './menteesDetails',
  true,
  /mentees\.json$/
);

const menteesByYear = menteesContext.keys().map((key) => {
  const menteeList = menteesContext(key);

  const yearMatch = key.match(/\.\/(\d{4})\/mentees\.json$/);
  const year = yearMatch ? yearMatch[1] : "Unknown";

  return {
    year,
    count: menteeList.length,
    mentees: menteeList,
  };
}).sort((a, b) => b.year - a.year);


export default function MenteeYears() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-10">
        All API Cohort Years
      </h1>

      <div className="space-y-6">
        {menteesByYear.map(({ year, count }) => (
          <div key={year} className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold">{year}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {count} participants
            </p>

            <a
              href={`/api-mentees/${year}`}
              className="text-primary hover:underline"
            >
              View Participants →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}



// const cohorts = [
//   {
//     id: "api-1",
//     title: "API Cohort 1",
//     period: "Jan 2025",
//     description: "Intro to REST & GraphQL",
//     participants: [
//       { name: "Alice Doe", role: "Frontend" },
//       { name: "Bob Smith", role: "Backend" },
//     ],
//   },
//   {
//     id: "docs-1",
//     title: "Technical Writing Cohort",
//     period: "Feb 2025",
//     description: "Docs, tutorials and guides",
//     participants: [
//       { name: "Carol Lee", role: "Technical Writer" },
//       { name: "Dan Nguyen", role: "Editor" },
//     ],
//   },
//   // add more cohorts or import them from JSON files
// ];

// export default function CohortsPage() {
//   const [openCohort, setOpenCohort] = useState(null);

//   return (
//     <div className="min-h-screen font-sans text-black dark:text-white p-8 md:p-16 lg:p-24">
//       <div className="max-w-7xl mx-auto">
//         <header className="text-left mb-12">
//           <p className="text-sm text-slate-400 tracking-[0.2em] uppercase mb-4">
//             ALL COHORTS
//           </p>
//           <h1 className="text-4xl md:text-5xl font-medium">Cohorts</h1>
//         </header>

//         <main>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {cohorts.map((cohort) => {
//               const isOpen = openCohort === cohort.id;
//               return (
//                 <div
//                   key={cohort.id}
//                   className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
//                 >
//                   <h2 className="text-xl font-semibold mb-1">{cohort.title}</h2>
//                   <p className="text-sm text-slate-500 mb-3">{cohort.period}</p>
//                   <p className="text-sm mb-4">{cohort.description}</p>

//                   <div className="flex items-center justify-between">
//                     <button
//                       onClick={() => setOpenCohort(isOpen ? null : cohort.id)}
//                       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                     >
//                       {isOpen
//                         ? "Hide participants"
//                         : `View participants (${cohort.participants.length})`}
//                     </button>
//                     <span className="text-sm text-slate-400">
//                       {cohort.participants.length} participants
//                     </span>
//                   </div>

//                   {isOpen && (
//                     <div className="mt-4">
//                       <ul className="space-y-3">
//                         {cohort.participants.map((p, i) => (
//                           <li
//                             key={i}
//                             className="flex items-center gap-3 p-2 rounded border border-slate-100 dark:border-gray-700"
//                           >
//                             <div className="w-10 h-10 bg-slate-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium">
//                               {p.name
//                                 .split(" ")
//                                 .map((n) => n[0])
//                                 .slice(0, 2)
//                                 .join("")}
//                             </div>
//                             <div>
//                               <div className="text-sm font-medium">{p.name}</div>
//                               <div className="text-xs text-slate-500">{p.role}</div>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
// import MenteeCard from "../../../components/menteeCard";

// export default function ApiMentees (){
//   return (
//     <div className="min-h-screen font-sans text-black dark:text-white p-8 md:p-16 lg:p-24">
//       <div className="max-w-7xl mx-auto">
//         <header className="text-left mb-16 text-gray-900! dark:text-white!">
//           <p className="text-sm text-slate-400 tracking-[0.2em] uppercase mb-4">
//             OUR API DOCS MENTEES
//           </p>
//           <h1 className="text-5xl md:text-6xl font-medium text-gray-900! dark:text-white!">
//             Mentees from the API cohort
//           </h1>
//         </header>

//         <main>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {data.map((mentee, index) => (
//               <MenteeCard key={index} mentee={mentee} />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };
