import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './TestimonialSection.module.css';

const Testimonials = [
  {
    name: "Etugbo Judith",
    testimony: "TWMP has helped my tech writing skills.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQFJSMphKkMJOw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730597439173?e=1752105600&v=beta&t=x6Thtg3X2pcJ8RioL7-W-E2_r1PMify9i4cWEMDsA8w"
  },
  {
    name: "Prince Onyeanuna",
    testimony: "Technical Writing Community made us skilled tech writers! Clear lessons, hands-on practice, great results. Highly recommend!",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQH23-gKK3aPdA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681679348016?e=1752105600&v=beta&t=JT8jjp9Gm0r7slhbxF3h-kyXEMI1dgXvyDnZDeFgIgA"
  },
  {
    name: "JOHN DOE",
    testimony: "From confused to confident! TW Community gave us the skills to excel in technical writing. 10/10!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
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
