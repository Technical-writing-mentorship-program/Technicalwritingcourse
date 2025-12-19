import React from "react";

const ContributorCard = ({ mentee }) => {
  return (
    <div className="bg-[#2a3044] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img 
        src={mentee.imageUrl} 
        alt={`Portrait of ${mentee.name}`} 
        className="w-full h-80 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{mentee.name}</h3>
        <p className="text-slate-300 mt-1">{mentee.role}</p>
      </div>
    </div>
  );
};

export default ContributorCard;


// export default Contributors =() =>{
//     return (
//         <div className="contributorCard">
//             <div className="contributorImg">
//                 <img src="https://media.licdn.com/dms/image/v2/D5603AQGtHMpTYdjWwA/profile-displayphoto-shrink_400_400/B56ZTRxPe1HwAg-/0/1738686135680?e=1757548800&v=beta&t=tBNXXL-tZJpxY4qpZ05BeLNd7Gcd-JiRr-NlGcrg8Bo"></img>
//             </div>
//             <div className="contributorInfo">
//                 <h3>Edun Rilwan</h3>
//                 <p>Software developer</p>
//             </div>
//         </div>
//     );
// };