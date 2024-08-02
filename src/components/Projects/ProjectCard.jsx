import React from "react";
import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, description, imageSrc, skills, source } }) => {
    return <div className={styles.container}>
        <img className={styles.image} src={getImageURL(imageSrc)} alt={title}></img>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.skillsLinks}>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return <li key={id} className={styles.skill}>{skill}</li>;
                })}
            </ul>
            <div className={styles.links}>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    </div>;
};