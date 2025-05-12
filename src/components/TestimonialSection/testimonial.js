import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './TestimonialSection.module.css';
import Judith from './images/judith.jpeg'
import Prince from './images/prince.jpeg'
import Elizabeth from './images/elizabeth.jpeg'

const Testimonials = [
  {
    name: "Etugbo Judith",
    testimony: "TWMP has played a big role in my journey as a technical writer. Since I joined its Technical writing mentorship program in 2024, my view of technical writing has changed a lot. I have learned so much with the help of mentors and the founder, who is always ready to guide us and answer our questions.",
    img: Judith
  },
  {
    name: "Prince Onyeanuna",
    testimony: "The Technical Writing Mentorship Program was the turning point in my career. I joined the 2023 cohort with curiosity and left with clarity, confidence, and a strong foundation in technical writing. \n\nToday, I not only write but also mentor others, all thanks to the seed this community planted in me.",
    img: Prince
  },
  {
    name: "Elizabeth Bassey",
    testimony: "The TWMP is a place for anyone looking to build industry standard technical writing and documentation skills with solid projects on their portfolio to show. They don't just say, they do exactly what they say!",
    img: Elizabeth
  }
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
