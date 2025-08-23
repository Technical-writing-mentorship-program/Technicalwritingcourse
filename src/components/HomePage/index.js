import React from "react";
import styles from "./styles.module.css";
import { TypeAnimation } from 'react-type-animation';

export default function Homepage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <TypeAnimation
                sequence={[
                  'WELCOME TO THE TECHNICAL WRITING MENTORSHIP PROGRAM',
                  2000,
                ]}
                wrapper="h1"
                speed={50}
                className={styles.title}
                repeat={Infinity}
                cursor={false}
              />
            </div>
            <a
              className={styles.button}
              href="https://discord.com/invite/hxydebksg3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join us on Discord
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dmvphwhvc/image/upload/v1746784638/transparent_1746727403_8269_fbdc3y.svg"
              alt="Technical writing illustration"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      { }
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dmvphwhvc/image/upload/v1746783075/transparent_1746727524_6550_t2uoah.svg"
              alt="Direct mentorship"
              className={styles.image}
            />
          </div>
          <div className={styles.aboutContainer}>
            <h1 className={styles.title}>DIRECT MENTORSHIP</h1>
            <p className={styles.subtitle} style={{}}>
              Our Direct Mentorship program is designed to provide personalized guidance and one-on-one support to aspiring or early-career technical writers.
              Whether you're transitioning into technical writing or looking to refine your skills, direct mentorship gives you access to experienced professionals who are
              here to help you grow with intention and clarity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};