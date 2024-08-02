import React from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Diana</h1>
            <p className={styles.description}>I'm an aspiring web developer with experience using Python, Django, React, JavaScript, NodeJS and more. 
                Reach out if you'd like to learn more!
            </p>
            <a  className={styles.contactBtn} href="mailto:diana.ioana.danciu@gmail.com">Contact Me</a>
        </div>
        <img src={getImageURL("hero/heroImage.jpeg")} alt="image of me" className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};