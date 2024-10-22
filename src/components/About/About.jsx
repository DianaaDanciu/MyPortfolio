import React from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageURL("about/aboutImage.jpeg")} alt="me" className={styles.aboutImage}></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageURL("about/cursorIcon.png")}
                        alt="Cursor icon"
                        className={styles.iconImage}>
                    </img>
                    <div className={styles.aboutItemText}>
                        <h3>University</h3>
                        <p>I graduated UBB Facultatea de Matematica si Informatica, Bachelor of Computer Science (English Section), 2021-2024.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageURL("about/cursorIcon.png")}
                        alt="Cursor icon"
                        className={styles.iconImage}>
                    </img>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageURL("about/cursorIcon.png")}
                        alt="Cursor icon"
                        className={styles.iconImage}>
                    </img>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience building fast and optimized back-end systems and APIs.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
};