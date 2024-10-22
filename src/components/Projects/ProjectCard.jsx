import React, { useState } from "react";
import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, description, imageSrc, skills, source } }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={getImageURL(imageSrc)}
                alt={title}
                onClick={openModal}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.skillsLinks}>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => (
                        <li key={id} className={styles.skill}>{skill}</li>
                    ))}
                </ul>
                <div className={styles.links}>
                    <a href={source} className={styles.link}>Source</a>
                </div>
            </div>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeModal}>X</button>
                        <img className={styles.modalImage} src={getImageURL(imageSrc)} alt={title} />
                    </div>
                </div>
            )}
        </div>
    );
};
