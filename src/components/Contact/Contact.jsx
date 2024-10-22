import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bnxd01m', 'template_xj2yqod', e.target, 'zSRG66PaHJ5HbppgP')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({ from_name: '', from_email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <div className={styles.formContainer}>
            <form className={styles.contactForm} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className={styles.formInput}
                    value={formData.from_name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    className={styles.formInput}
                    value={formData.from_email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" className={styles.sendButton}>Send Mail</button>
            </form>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageURL("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:diana.ioana.danciu@gmail.com">Email me</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/linkedinIcon.png")} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/diana-danciu-4691aa266/">My LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/githubIcon.png")} alt="github icon" />
                <a href="https://github.com/DianaaDanciu?tab=repositories">My Github</a>
            </li>
        </ul>
    </footer>;
}
