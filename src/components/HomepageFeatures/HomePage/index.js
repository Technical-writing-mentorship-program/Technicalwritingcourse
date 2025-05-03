import React from "react";
import styles from "./styles.module.css";

export default function Homepage() {
  return (
    <>
      {}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Welcome to the Technical Writing Mentorship Program
            </h1>
            <a
              className={styles.button}
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join us on Discord
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dmvphwhvc/image/upload/v1746098734/Untitled_design__3_-removebg-preview_uudx1p.png"
              alt="Technical writing illustration"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dmvphwhvc/image/upload/v1746103162/directmentorshipTMWP-removebg-preview_z1edw9.png"
              alt="Direct mentorship"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>DIRECT MENTORSHIP</h1>
            <p className={styles.subtitle} style={{}}>
              Gear up for the Quarkwood Dash, one of the region's biggest
              marathons. It takes runners on a scenic and challenging course
              through the hilly borders, circling back to pass some of the
              city's historic landmarks before the finish line at Quark Square.
              <br />
              <br />
              It's going to be a rush, so you better be run-ready this August!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
