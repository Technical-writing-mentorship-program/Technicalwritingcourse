import React from "react";
import MenteeCard from "../../../components/menteeCard";
import { ListCohortsCard } from "../../../components/ListCohortsCard";
import Layout from "@theme/Layout";

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

const header = "Product Docs Cohort";
const path = "/cohorts/product-docs";

export default function ApiMentees (){

  return (
    <Layout>
      <div className="min-h-screen font-sans text-black dark:text-white p-8 md:p-16 lg:p-24">
        <div className="max-w-7xl mx-auto">
          <header className="text-left mb-16 text-gray-900! dark:text-white!">
            <p className="productDocsListHeader text-sm text-slate-400 tracking-[0.2em] uppercase mb-4">
              OUR PRODUCT DOCS MENTEES
            </p>
          </header>

          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {menteesByYear.map((mentee, index) => (
                <ListCohortsCard key={index} year={mentee.year} count={mentee.count} header={header} path={path} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};
