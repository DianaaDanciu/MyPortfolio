import React from "react";
import styles from "./Experience.module.css";
import { getImageURL } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img
                                src={getImageURL(skill.imageSrc)}
                                alt={skill.title}>
                            </img>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })}
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItm, id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img 
                            src={getImageURL(historyItm.imageSrc)}
                            alt={historyItm.organisation} Logo>
                            </img>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItm.role}, ${historyItm.organisation}`}</h3>
                                <p>{`${historyItm.startDate} - ${historyItm.endDate}`}</p>
                                <ul>
                                    {historyItm.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>

    </section>;
};