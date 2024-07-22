import { useState } from 'react';
import styles from './ContactUs.module.css';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        file: null,
        permission: false
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <h3 className={styles.sideHeading}>CONTACT FORM</h3>

                <div className={styles.wrapper}>
                    <h2 className={styles.title}>There's an innovation on your mind? Contact us!</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="NAME"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="START TYPING HERE"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className={styles.textarea}
                            required
                        ></textarea>
                        <div className={styles.fileUpload}>
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                                className={styles.fileInput}
                            />
                            <span className={styles.fileLabel}>Upload your file</span>
                        </div>

                        <div className={styles.msgContent}>
                            <button type="submit" className={styles.submitButton}>
                                Send your message →

                            </button>
                            <div className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    name="permission"
                                    checked={formData.permission}
                                    onChange={handleChange}
                                    required
                                />
                                <span className={styles.checkboxLabel}>
                                    I declare that I give my permission to Sparkbit sp z.o. for the processing of my personal data in order to receive an answer to this inquiry.
                                </span>
                            </div>


                        </div>

                    </form>
                </div>

   

            </div>

            <footer className={styles.footer}>
                    <div className={styles.fullInfo}>
                        <div>CONTACT@SPARKBIT.PL</div>
                        <div>
                            MELCHIORA WANKOWICZA 5/30<br />
                            02-796 WARSZAWA
                        </div>
                        <div>
                            CLUTCH<br />
                            PANGEA<br />
                            LINKEDIN<br />
                            FACEBOOK
                        </div>
                        <div>AI CONSULTATION</div>
                        <div>PRIVACY POLICY</div>
                    </div>
                    <div className={styles.mobileInfo}>
                        <div>DESIGNED BY BALSAMSTUDIO.COM</div>
                        <div>© 2024 SPARKBIT. ALL RIGHTS RESERVED.</div>
                    </div>
                </footer>

        </section>
    );
}