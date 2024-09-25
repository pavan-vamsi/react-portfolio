import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me setting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
                I{"'"}m a Front End Developer with extensive experience
                optimizing web interfaces with React, reducing load times by
                55%, and enhancing user engagement through performance
                improvements and responsive design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>BackEnd Developer</h3>
              <p>
                I{"'"}ve hands-on experience developing and integrating software
                solutions using Java, Python, and Node.js, building RESTful
                APIs, improving performance, and implementing automation testing
                frameworks with 95% coverage reducing defects by over 35%.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>AWS</h3>
              <p>
                I{"'"}ve hands-on AWS/Azure and DevOps experience, including
                configuring CI/CD pipelines with Jenkins, deploying applications
                with Docker and Kubernetes, and leveraging AWS services like
                Lambda and S3 to optimize cloud infrastructure and automate
                deployments.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
