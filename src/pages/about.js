import React from 'react';
import Layout from '@theme/Layout';

export default function AboutUs() {
  return (
    <Layout title="About Us" description="Learn about TWMP, our mission, and the people behind the scenes.">
      <main className="container margin-vert--lg">
        <h1>👋 About TWMP</h1>
        <p>
          TWMP (Technical Writers Mentorship Program) is a global community that helps aspiring technical writers gain real-world experience, connect with mentors, and work on open-source documentation.
        </p>
        <p>
          We started as a grassroots initiative to bridge the gap between learning and doing. Since then, we’ve mentored hundreds of writers, collaborated with open-source projects, and created a space where learning meets contribution.
        </p>

        <h2>🌍 What We Stand For</h2>
        <ul>
          <li><strong>Access:</strong> We believe great opportunities should be available to anyone, regardless of background.</li>
          <li><strong>Growth:</strong> Learning by doing is our thing—every writer gets hands-on experience.</li>
          <li><strong>Community:</strong> Collaboration is at the heart of everything we do.</li>
        </ul>

        <h2>🤝 Meet the Team</h2>
        <p>
          We’re a mix of technical writers, engineers, open-source contributors, and documentation nerds. Want to join us? Reach out via <a href="mailto:hello@twmp.com">hello@twmp.com</a>.
        </p>
      </main>
    </Layout>
  );
}
