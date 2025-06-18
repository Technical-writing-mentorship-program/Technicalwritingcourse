import React, { useState } from "react";
import Layout from "@theme/Layout";

export default function TrustedTalent() {
  const [activeTab, setActiveTab] = useState("api-docs");

  const tabsData = [
    {
      id: "api-docs",
      label: "API Docs",
      content: [
        {
          name: "C-one wallet",
          url: "https://c-one.readme.io/reference/getting-started-with-your-api",
        },
        {
          name: "Dummy API",
          url: "https://app.swaggerhub.com/apis-docs/wise4rmgod/DummyAPI",
        },
        { name: "Nylas Docs", url: "https://developer.nylas.com/docs/api/" },
      ],
    },
    {
      id: "docs-guides",
      label: "Documentation guides",
      content: [
        {
          name: "Interswitch Group",
          url: "https://docs.interswitchgroup.com/v1.1/docs/home",
        },
        {
          name: "Accumulate Network",
          url: "https://docs.accumulatenetwork.io",
        },
        { name: "Nylas", url: "https://developer.nylas.com" },
      ],
    },
    {
      id: "tech-blogs",
      label: "Technical blogs",
      content: [
        {
          name: "How to Automate A Blog Post App Deployment With GitHub Actions, Node.js, CouchDB, and Aptible",
          url: "https://hackernoon.com/how-to-automate-a-blog-post-app-deployment-with-github-actions-nodejs-couchdb-and-aptible",
        },
        {
          name: "Postman Guide for Beginners: A comprehensive Introduction to API Testing and Collaboration",
          url: "https://wise4rmgod.hashnode.dev/postman-guide-for-beginners-a-comprehensive-introduction-to-api-testing-and-collaboration",
        },
      ],
    },
  ];

  const Callout = ({ title, children }) => (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "var(--ifm-background-surface-color)",
        borderLeft: "4px solid var(--ifm-color-primary)",
        borderRadius: "4px",
        margin: "1rem 0",
        color: "var(--ifm-font-color-base)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <svg
          style={{
            width: "1.25rem",
            height: "1.25rem",
            color: "var(--ifm-font-color-base)",
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <strong
          style={{
            fontSize: "1rem",
            color: "var(--ifm-font-color-base)",
          }}
        >
          {title}
        </strong>
      </div>
      <div style={{ color: "var(--ifm-font-color-base)" }}>{children}</div>
    </div>
  );

  return (
    <Layout
      title="Trusted Talent"
      description="Hire from a vetted pool of technical writers trained by TWMP."
    >
      <main className="container margin-vert--lg">
        <h1>Trusted Talent</h1>

        <p>
          At our disposal, we have a talented pool of trusted writers who are
          poised to create world-class content tailored to your needs.  Whether you require assistance with technical writing, documentation,
          API guides, or any other aspect of technical articles, we’ve got you
          covered.
        </p>

        <p>
          Feel free to reach out to us, and let’s embark on a journey of
          exceptional content creation together!
        </p>

        <Callout title="Contact us:">
          <a
            href="mailto:writingt82@gmail.com"
            style={{
              color: "var(--ifm-link-color)",
              textDecoration: "none",
              fontWeight: "500",
              ":hover": { textDecoration: "underline" },
            }}
          >
            Email us at writingt82@gmail.com
          </a>
        </Callout>

        <h2>Sample Projects</h2>

        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              borderBottom: "2px solid var(--ifm-color-emphasis-200)",
              marginBottom: "1rem",
            }}
          >
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "none",
                  border: "none",
                  borderBottom:
                    activeTab === tab.id
                      ? "2px solid var(--ifm-color-primary)"
                      : "2px solid transparent",
                  color: activeTab === tab.id
                    ? "var(--ifm-color-primary)"
                    : "var(--ifm-font-color-secondary)",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabsData.map((tab) => (
            <div
              key={tab.id}
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              <ul style={{ listStyle: "disc", paddingLeft: "2rem" }}>
                {tab.content.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      margin: "0.5rem 0",
                      fontSize: "1.125rem",
                      color: "var(--ifm-font-color-base)",
                    }}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--ifm-link-color)",
                        textDecoration: "none",
                        ":hover": { textDecoration: "underline" },
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

