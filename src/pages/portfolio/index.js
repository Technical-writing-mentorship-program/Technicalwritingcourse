import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function PortfolioHome() {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
      borderRadius: "8px",
      border: "1px solid var(--ifm-color-emphasis-200)",
      backgroundColor: "var(--ifm-background-color)",
      transition: "all 0.2s ease",
      textDecoration: "none",
      ":hover": {
        borderColor: "var(--ifm-color-primary)",
        boxShadow: "0 2px 8px var(--ifm-color-emphasis-200)",
        transform: "translateY(-2px)",
      },
    },
    title: {
      margin: "0.5rem 0",
      color: "var(--ifm-heading-color)",
      fontSize: "1.25rem",
    },
    description: {
      color: "var(--ifm-font-color-secondary)",
      textAlign: "center",
      margin: 0,
      fontSize: "0.95rem",
    },
    grid: {
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      padding: "1rem 0",
    },
  };

  const BookIcon = () => (
    <svg
      style={{
        width: "48px",
        height: "48px",
        color: "var(--ifm-color-primary)",
        marginBottom: "1rem",
      }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );

  return (
    <Layout
      title="Portfolio"
      description="Explore our documentation and writing portfolio."
    >
      <main className="container margin-vert--lg">
        <h1>Portfolio</h1>
        <p style={{ maxWidth: "600px", marginBottom: "2rem" }}>
          Here’s a glimpse into our work—real-world projects, case studies, and
          technical documentation written by our talented community.
        </p>

        <div style={styles.grid}>
          {/* API Card */}
          <Link to="/portfolio/api" style={styles.card}>
            <BookIcon />
            <h3 style={styles.title}>API Documentation</h3>
            <p style={styles.description}>
              Comprehensive API documentation examples and integration guides
            </p>
          </Link>

          {/* Glasp Card */}
          <Link to="/portfolio/glasp" style={styles.card}>
            <BookIcon />
            <h3 style={styles.title}>Glasp Articles</h3>
            <p style={styles.description}>
              Technical articles and knowledge base documentation examples
            </p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
