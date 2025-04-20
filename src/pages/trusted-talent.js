import React from 'react';
import Layout from '@theme/Layout';

export default function TrustedTalent() {
  return (
    <Layout title="Trusted Talent" description="Hire from a vetted pool of technical writers trained by TWMP.">
      <main className="container margin-vert--lg">
        <h1>✅ Trusted Talent</h1>
        <p>
          Need documentation done right? We’ve got you.
        </p>
        <p>
          TWMP trains and mentors technical writers through real projects, reviews, and community feedback. Our graduates don’t just know the theory—they’ve done the work.
        </p>

        <h2>💼 Why Hire Through TWMP?</h2>
        <ul>
          <li><strong>Vetted Talent:</strong> Every writer goes through hands-on training and mentorship.</li>
          <li><strong>Technical Know-How:</strong> Our writers work on cloud-native, open-source, API, and DevOps documentation.</li>
          <li><strong>Fast & Reliable:</strong> We match you with writers who deliver high-quality docs—on time.</li>
        </ul>

        <h2>🚀 Ready to Get Started?</h2>
        <p>
          Whether you’re looking for help with internal documentation, product onboarding, or API references—we’ll connect you with the right writer.
        </p>
        <p>
          <a href="mailto:talent@twmp.com">Contact us at talent@twmp.com</a> and let’s make documentation less painful.
        </p>
      </main>
    </Layout>
  );
}