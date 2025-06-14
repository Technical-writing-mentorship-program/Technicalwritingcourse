import React from "react";
import Layout from "@theme/Layout";

export default function AboutUs() {
  return (
    <Layout
      title="About Us"
      description="Learn about TWMP's mentorship program"
    >
      <main className="container margin-vert--lg">
        <h1>About TWMP</h1>

        <p>
          Our program is designed for individuals looking to improve their
          technical writing skills and advance their careers in software
          development, community management, and developer advocacy.
          Participants will be matched with experienced technical writers who
          mentor them, providing guidance and feedback on their writing
          projects.
        </p>

        <p>
          The mentors will share their knowledge of industry-specific
          terminology and best practices, and offer tips on explaining complex
          technical concepts in simple terms. Participants will work on
          real-world writing projects throughout the program, such as
          documentation, tutorials, and blog posts. They will also have access
          to various resources and tools, including templates, style guides, and
          documentation software.
        </p>

        <p>
          The program is flexible and can be tailored to fit each participant’s
          schedule and goals. It will run for a period of 12 weeks, with weekly
          check-ins and progress reports.
        </p>
      </main>
    </Layout>
  );
}
