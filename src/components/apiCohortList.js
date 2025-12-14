import MenteeCard from "@site/src/components/menteeCard";
import Layout from "@theme/Layout";
import { useParams } from 'react-router-dom';


const menteesContext = require.context(
  '../pages/cohorts/api/menteesDetails',
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


export default function ApiMentees (){
  const { year } = useParams();
  const cohort = menteesByYear.find(cohort => cohort.year === year);
  const data = cohort ? cohort.mentees : [];

  return (
    <Layout
      title={`API Documentation Cohort ${year} Mentees`}
      description={`List of all mentees from the API Documentation cohort of ${year}`}
    >
      <div className="min-h-screen font-sans text-black dark:text-white p-8 md:p-16 lg:p-24">
        <div className="max-w-7xl mx-auto">
          <header className="text-left mb-16 text-gray-900! dark:text-white!">
            <p className="apiCohortsListHeader text-sm text-black tracking-[0.2em] uppercase mb-4">
              OUR API DOCS MENTEES
            </p>
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
    </Layout>
  );
};