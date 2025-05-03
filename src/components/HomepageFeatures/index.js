import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <>
      { }
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Welcome to the Technical Writing Mentorship Program
            </h1>
            <p className={styles.subtitle}>Learn. Grow. Connect.</p>
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

      { }
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
            <p className={styles.subtitle} style={{ color: 'black' }}>
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
