import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./TestimonialSection.module.css";

const Testimonials = [
  {
    name: "J. COLE",
    testimony: "TWMP has helped my tech writing skills.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "MARK OWEN",
    testimony:
      "Technical Writing Community made us skilled tech writers! Clear lessons, hands-on practice, great results. Highly recommend!",
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "JOHN DOE",
    testimony:
      "From confused to confident! TW Community gave us the skills to excel in technical writing. 10/10!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
];

function Testimony({ name, testimony, img }) {
  return (
    <div className={clsx(styles.testimonialBox, "col col--4")}>
      <div className={styles.testimonialContent}>
        <img src={img} alt={name} className={styles.testimonialImg} />
        <Heading as="h2" className={styles.testimonialHeader}>
          {name}
        </Heading>
        <p className={styles.testimonialText}>{testimony}</p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className={styles.testimonialSection}>
      <div className="container">
        <div className="row">
          {Testimonials.map((props, idx) => (
            <Testimony key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
