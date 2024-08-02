import React from "react";
import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageURL("contact/emailIcon.png")} alt="email icon"></img>
                <a href="mailto:diana.ioana.danciu@gmail.com">Email me</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/linkedinIcon.png")} alt="linkedin icon"></img>
                <a href="https://www.linkedin.com/in/diana-danciu-4691aa266/">My LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/githubIcon.png")} alt="github icon"></img>
                <a href="https://github.com/DianaaDanciu?tab=repositories">My Github</a>
            </li>
        </ul>
    </footer>
}