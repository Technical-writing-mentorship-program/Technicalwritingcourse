import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './TestimonialSection.module.css';

const Testimonials = [
  {
    name: "Joshua Onwuemene",
    testimony: "TWMP has helped my tech writing skills.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQFdYbuW0s0H7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732228944706?e=1751500800&v=beta&t=WZrrkKO-1LmdLPQgDg7SX_CaBiDLJUnHVoz5jv706vw"
  },
  {
    name: "Edun Rilwan",
    testimony: "Technical Writing Community made us skilled tech writers! Clear lessons, hands-on practice, great results. Highly recommend!",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGtHMpTYdjWwA/profile-displayphoto-shrink_400_400/B56ZTRxPe1HwAg-/0/1738686135680?e=1751500800&v=beta&t=P4Az0dyx-SXHkGKx8Z9R2WvlU0XW1fY5VaUtKxwpalk"
  },
  {
    name: "Makinde Mercy",
    testimony: "From confused to confident! TW Community gave us the skills to excel in technical writing. 10/10!",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEWJ0ADOOcYaA/profile-displayphoto-shrink_400_400/B4DZXTqIpJHsAk-/0/1743012796934?e=1751500800&v=beta&t=UlgtLM-ICnjaAxF1dx9bH7SFBfJbXGA5ALzdChgbXHI"
  }
];

function Testimony({ name, testimony, img }) {
  return (
    <div className={clsx(styles.testimonialBox, 'col col--4')}>
      <div className={styles.testimonialContent}>
        <img src={img} alt={name} className={styles.testimonialImg} />
        <Heading as="h2" className={styles.testimonialHeader}>{name}</Heading>
        <p className={styles.testimonialText}>{testimony}</p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className={styles.testimonialSection}>
      <div className='container'>
        <div className="row">
          {Testimonials.map((props, idx) => (
            <Testimony key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
