import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I{"'"}m Pavan Vamsi</h1>
        <p className={styles.description}>
          I{"'"}m a software engineer with 3+ years of experience in optimizing
          application performance and delivery timelines using Java, React, and
          NodeJS.
        </p>
        <a className={styles.contactBtn} href="mailto:pavanvamsi0402@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/bg.png")}
        alt="Image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
