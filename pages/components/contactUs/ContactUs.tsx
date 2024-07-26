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
                    <h2 className={styles.title}>There's an innovation on your mind? <br></br>Contact us!</h2>
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

                        <div className={styles.textareaContainer}>
                            <textarea
                                name="message"
                                placeholder="START TYPING HERE"
                                value={formData.message}
                                onChange={handleChange}
                                rows={10}
                                className={styles.textarea}
                                required
                            ></textarea>
                            <label htmlFor="file-input" className={styles.fileLabel}>
                                <img src="/uploadIcon.svg" alt="Upload" className={styles.uploadIcon} />
                                Upload your file
                            </label>
                            <input
                                type="file"
                                name="file"
                                id="file-input"
                                onChange={handleChange}
                                className={styles.fileInput}
                            />
                        </div>


                        <div className={styles.msgContent}>
                            <button type="submit" className={styles.submitButton}>
                                Send your message
                                <span style={{ alignSelf: "center", marginLeft: '10px', marginTop: "10px" }}>
                                    <img src="/rightArrow.svg" alt="whatwedo" height="12px" width='15px' />
                                </span>

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
                                    I declare that I give my permission to Sumfactor sp z.o. for the processing of my personal data in order to receive an answer to this inquiry.
                                </span>
                            </div>


                        </div>

                    </form>
                </div>



            </div>

            <footer className={styles.footer}>
                <div className={styles.fullInfo}>
                    <div>CONTACT@Sumfactor.PL</div>
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
                    <div>© 2024 Sumfactor. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>

        </section>
    );
}
