import React from "react";


export const ListCohortsCard = ({ year, count, header, path }) => {
    return (
        <div
            key={year}
            className="bg-[#8a4dff] rounded-lg shadow p-6"
        >
            <h2 className="text-xl font-semibold mb-1">{`${header} ${year}`}</h2>
            <p className="text-sm mb-3">{year}</p>
            <div className="flex items-center justify-between">
                <button
                    className="px-4 py-2 bg-white text-[#8a4dff] rounded hover:bg-gray-200 transition"
                    onClick={() => {
                        window.location.href = `${path}/${year}`;
                    }} 
                >
                    View Participants
                </button>
                <span className="text-sm">
                    {count} participants
                </span>
            </div>
        </div>  
    )

};