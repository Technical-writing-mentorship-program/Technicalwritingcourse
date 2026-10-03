import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { events } from "@site/src/data/events";
import { formatDate } from "@site/src/components/Events/EventPage";
import styles from "@site/src/components/Events/styles.module.css";

export default function Events() {
  return (
    <Layout
      title="Events"
      description="Meetups, workshops and conferences from the Technical Writing Mentorship Program."
    >
      <main className={styles.page}>
        <div className="container">
          <header className={styles.indexHero}>
            <h1 className={styles.indexTitle}>Events</h1>
            <p className={styles.indexIntro}>
              Meetups, workshops and conversations from the TWMP community. Come learn, or just
              meet the people behind the docs.
            </p>
          </header>
          <ul className={styles.eventList}>
            {events.map((e) => (
              <li key={e.slug}>
                <Link to={`/events/${e.slug}`} className={styles.eventCard}>
                  <span className={styles.eventDate}>
                    {formatDate(e.date)}
                    <br />
                    {e.city}
                  </span>
                  <div>
                    <h2 className={styles.eventName}>{e.name}</h2>
                    <p className={styles.eventTagline}>{e.tagline}</p>
                  </div>
                  <span className={styles.eventGo}>See schedule</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
