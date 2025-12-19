import React from 'react';
import ContributorCard from "./contributorCard";

const menteesData = [
  {
    id: 1,
    name: 'Edun Rilwan',
    role: 'Software developer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGtHMpTYdjWwA/profile-displayphoto-shrink_400_400/B56ZTRxPe1HwAg-/0/1738686135680?e=1757548800&v=beta&t=tBNXXL-tZJpxY4qpZ05BeLNd7Gcd-JiRr-NlGcrg8Bo',
  },
  {
    id: 2,
    name: 'Etugbo Judith',
    role: 'Technical writer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFGtXJS1tDy0Q/profile-displayphoto-scale_400_400/B4DZhhb.HUHwAg-/0/1753981381054?e=1757548800&v=beta&t=wvSJwVICS8XnS4zm7FEK1BQieye5b21nqUgCg07DXBE',
  },
  {
    id: 3,
    name: 'Peace Sandy',
    role: 'Documentation Engineer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQF48XBl0sVXkA/profile-displayphoto-scale_400_400/B4DZfKw0CXHkAk-/0/1751453486115?e=1757548800&v=beta&t=OgFLOAbtp9rYfTv-LB49UIJMyTTZbPfR9FJDWBpjSNI',
  },
  {
    id: 4,
    name: 'David Adeleke',
    role: 'Cloud Solutions Architect',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Chiamaka Nwosu',
    role: 'Frontend Developer',
    imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Samuel Adebayo',
    role: 'Product Manager',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
  },
];

const Contributors = () => {
  return (
    <div className="bg-black min-h-screen font-sans text-white p-8 md:p-16 lg:p-24">
      <div className="max-w-7xl mx-auto">
        <header className="text-left mb-16">
          <p className="text-sm text-slate-400 tracking-[0.2em] uppercase mb-4">
            OUR MENTEES
          </p>
          <h1 className="text-5xl md:text-6xl font-medium text-white">
            Mentees from the present cohort
          </h1>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {menteesData.map((mentee) => (
              <ContributorCard key={mentee.id} mentee={mentee} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contributors;


// export default function Contributors (){
//     return (
//         <>
//             <h1>This is a page for contributors</h1>
//             <div className="contributorsContainer">
//                 <div className="contributorCard">
//                     <div className="contributorImg">
//                         <img src="https://media.licdn.com/dms/image/v2/D5603AQGtHMpTYdjWwA/profile-displayphoto-shrink_400_400/B56ZTRxPe1HwAg-/0/1738686135680?e=1757548800&v=beta&t=tBNXXL-tZJpxY4qpZ05BeLNd7Gcd-JiRr-NlGcrg8Bo"></img>
//                     </div>
//                     <div className="contributorInfo">
//                         <h3>Edun Rilwan</h3>
//                         <p>Software developer</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };