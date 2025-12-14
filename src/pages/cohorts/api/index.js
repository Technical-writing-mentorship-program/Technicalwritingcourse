// Dynamic import of all mentees.json files
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";


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


export default function CohortsPage() {

  return (
    <Layout
      title="API Documentation Cohorts"
      description="List of all API Documentation cohorts and their participants"
    >
      <main>
        <div className="min-h-screen font-sans text-gray-800 dark:text-white p-8 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto">
            <header className="text-left mb-12">
              <p className="apiCohortsHeader text-sm text-black tracking-[0.2em] uppercase mb-4">
                ALL API DOCUMENTATION COHORTS
              </p>
            </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menteesByYear.map(({ year, count }) => (
                  <div
                    key={year}
                    className="bg-[#8a4dff] rounded-lg shadow p-6"
                  >
                    <h2 className="text-xl font-semibold mb-1">{`API cohort ${year}`}</h2>
                    <p className="text-sm mb-3">{year}</p>
                    <div className="flex items-center justify-between">
                      <button
                        className="px-4 py-2 bg-white text-[#8a4dff] rounded hover:bg-gray-200 transition"
                        onClick={() => {
                          window.location.href = `/cohorts/api/${year}`;
                        }} 
                      >
                        View Participants
                      </button>
                      <span className="text-sm">
                        {count} participants
                      </span>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

