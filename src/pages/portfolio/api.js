import React from "react";
import Layout from "@theme/Layout";

export default function ApiPortfolio() {
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
    <Layout title="TMDb API Documentation">
      <main className="container margin-vert--lg">
        <h1>TMDb API Documentation</h1>

        <p>
          In this assignment, you will create API documentation for{" "}
          <strong>The Movie Database</strong> (TMDb) API using Postman or any
          API platform you can use (E.g, <code>Readme</code>,{" "}
          <code>Postman</code>), a popular movie and TV show database API.
        </p>
        <p>
          The goal is to teach you how to access and document real-world APIs
          effectively.
        </p>

        <Callout title="Note">
          Please use an interactive API platform where users can test without
          leaving the platform.
        </Callout>

        <h2>Prerequisites</h2>
        <ul>
          <li>Basic understanding of API concepts</li>
          <li>Familiarity with Markdown for documentation</li>
        </ul>

        <h2>Assignment Tasks</h2>

        <h3>1. Sign Up for TMDb API Access</h3>
        <ul>
          <li>Sign up for a TMDb API key by visiting TMDb API</li>
        </ul>

        <h3>2. Explore TMDb API Documentation</h3>
        <ul>
          <li>
            Review the official TMDb API documentation to understand the
            available endpoints and how to use the API
          </li>
        </ul>

        <h3>3. Create an API Overview</h3>
        <ul>
          <li>
            Write a brief introduction to the TMDb API, explaining its purpose
            and key features
          </li>
          <li>Provide an example use case for the TMDb API</li>
        </ul>

        <h3>4. Document Endpoints</h3>
        <ul>
          <li>
            Document all the TMDb API endpoints (e.g., searching for movies,
            retrieving movie details, listing genres, etc.)
          </li>
          <li>
            For each endpoint, provide:
            <ul>
              <li>Endpoint URL</li>
              <li>HTTP Method</li>
              <li>Request Parameters</li>
              <li>Request Headers (including the API key)</li>
              <li>Response Status Codes</li>
              <li>Response Body (sample JSON response)</li>
              <li>Authentication Requirements (using the API key)</li>
              <li>Example Request</li>
              <li>Example Response (sample JSON response)</li>
            </ul>
          </li>
        </ul>

        <h3>5. Explain Rate Limiting</h3>
        <ul>
          <li>
            Describe any rate limiting or usage restrictions imposed by the TMDb
            API
          </li>
        </ul>

        <h3>6. Add Usage Guidelines</h3>
        <ul>
          <li>
            Provide guidelines on best practices for using the TMDb API
            effectively and responsibly
          </li>
        </ul>

        <h3>7. Include Testing Instructions</h3>
        <ul>
          <li>
            Suggest methods for testing the TMDb API, such as writing test
            scripts
          </li>
        </ul>

        <h3>8. Submission Guidelines</h3>
        <ul>
          <li>Format your documentation using Markdown</li>
          <li>Submit your documentation via this link</li>
        </ul>

        <h2>Resources</h2>
        <ul>
          <li>TMDb API documentation: TMDb API Documentation</li>
          <li>
            API documentation class 1
            <div className="youtube-video">
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                src="https://www.youtube.com/embed/U-Qc1dVkKwU"
              ></iframe>
            </div>
          </li>
          <li>
            API documentation class 2
            <div className="youtube-video">
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                src="https://www.youtube.com/embed/WNoj6mZG5n8"
              ></iframe>
            </div>
          </li>
          <li>
            Document API docs using Readme.io and Postman
            <div className="youtube-video">
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                src="https://www.youtube.com/embed/V4_t8HJQ7hI"
              ></iframe>
            </div>
          </li>
        </ul>

        <Callout title="Submission">
          <ul style={{ margin: 0, paddingLeft: "1rem" }}>
            <li>
              <strong>Name:</strong> Samuel Theophilus
            </li>
            <li>
              <strong>LinkedIn Profile:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/samuel-theophilus/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--ifm-link-color)",
                  textDecoration: "none",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                LinkedIn Profile
              </a>
            </li>
            <li>
              <strong>Postman Documentation:</strong>{" "}
              <a
                href="https://documenter.getpostman.com/view/26159839/2s9YsQ9AQD"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--ifm-link-color)",
                  textDecoration: "none",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                Postman Documentation
              </a>
            </li>
          </ul>
        </Callout>
      </main>
    </Layout>
  );
}
