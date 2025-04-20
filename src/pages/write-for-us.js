import React from 'react';
import Layout from '@theme/Layout';

export default function WriteForUs() {
  return (
    <Layout title="Write for Us" description="Contribute to the TWMP blog and share your knowledge with the community.">
      <main className="container margin-vert--lg">
        <h1>✍️ Write for TWMP</h1>
        <p>
          Got a story to share? A tutorial, case study, or lesson you think would help others grow? We’re always looking for new voices to feature on the TWMP blog.
        </p>

        <h2>✨ What We’re Looking For</h2>
        <ul>
          <li>Technical writing tutorials</li>
          <li>Open source contribution stories</li>
          <li>API documentation deep dives</li>
          <li>Cloud or DevOps-related documentation practices</li>
          <li>Mentorship experiences in tech</li>
        </ul>

        <h2>📌 Submission Guidelines</h2>
        <ul>
          <li>Use a clear, concise, and friendly tone.</li>
          <li>Articles should be original and not published elsewhere.</li>
          <li>Include practical examples, visuals, or code snippets when possible.</li>
        </ul>

        <h2>🚀 How to Submit</h2>
        <p>
          Send a short pitch or draft to <a href="mailto:hello@twmp.com">hello@twmp.com</a>. If it fits, we’ll get back to you within a week with next steps.
        </p>

        <h2>💡 Need Inspiration?</h2>
        <p>
          Check out our <a href="/blog">Blog</a> or <a href="/docs/category/technical-writing-course">Academy</a> to see what others have written.
        </p>
      </main>
    </Layout>
  );
}