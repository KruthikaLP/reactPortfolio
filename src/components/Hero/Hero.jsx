import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <img
            src="/Kruthika.jpg" // Path to profile picture
            alt="Profile"
            className={styles.profilePhoto}
          />
        </div>
        <h1 className={styles.title}>Hi, I'm Kruthika</h1>
        <p className={styles.description}>
          I’m Kruthika, a passionate and skilled full-stack developer with a background in Computer Science Engineering. 
          I excel in both frontend and backend development, with hands-on experience in technologies like Java, Spring Boot,
           React.js, and MySQL.
        </p>
        <a href="/Kruthika_LP.pdf" download className={styles.resumeButton}>
          Download Resume
        </a>
      </div>
    </section>
  );
};
