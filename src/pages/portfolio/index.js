import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function PortfolioHome() {
  return (
    <Layout title="Portfolio" description="Explore our documentation and writing portfolio.">
      <main className="container margin-vert--lg">
        <h1>📁 Portfolio</h1>
        <p>
          Here’s a glimpse into our work—real-world projects, case studies, and technical documentation written by our talented community.
        </p>

        <ul>
          <li>
            <Link to="/portfolio/api">API </Link>
          </li>
          <li>
            <Link to="/portfolio/glasp">Glasp</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
