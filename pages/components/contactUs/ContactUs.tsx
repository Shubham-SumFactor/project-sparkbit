import { useState } from 'react';
import styles from './ContactUs.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const router = useRouter();

    const handlePrivatePolicy = () => {
        router.push('/privacyPolicy');
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.sideHeading}>CONTACT FORM</h2>

                <div className={styles.wrapper}>
                    <h2 >There's an innovation on your mind? Contact us!</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="NAME"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                            // required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                            // required
                            />
                        </div>

                        <div className={styles.textareaContainer}>
                            <textarea
                                name="message"
                                placeholder="START TYPING HERE"
                                value={formData.message}
                                onChange={handleChange}
                                rows={13}
                                className={styles.textarea}
                            // required
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


                        <div className={styles.msgContent} >
                            <div className={styles.buttonContainer}>
                                <div>
                                    <button type="submit" className={styles.submitButton}>
                                        <span> Send your message</span>
                                        <Image src="/leftArrowImage.svg" alt="rightarrow" height={15} width={15} className={styles.submitButtonArrow} />
                                    </button>
                                </div>

                                <button className={styles.scrollCircle} onClick={scrollToTop}>
                                    <Image src="/leftArrowImage.svg" alt="downArrow" height={15} width={15} className={styles.scrollArrow} />
                                </button>

                            </div>

                            <div className={styles.checkbox}>
                                <input
                                    type="radio"
                                    name="permission"
                                    checked={formData.permission}
                                    onChange={handleChange}
                                // required
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
                    <div>
                        <Link href="mailto:info@sumfactor.com">CONTACT@info@sumfactor.com</Link>
                    </div>
                    <div>
                        <Link href="https://maps.app.goo.gl/Upx4xf84eKRRWu5H7" target="_blank" rel="noopener noreferrer">
                            The Hive Co-working and Business Centre,
                            Plot 191,
                            <br />
                            Industrial Area Phase 2, Chandigarh, India – 160002
                        </Link>
                    </div>
                    <div>
                        {/* CLUTCH<br /> */}
                        {/* PANGEA<br /> */}
                        <Link href="https://in.linkedin.com/company/sumfactor" target="_blank" rel="noopener noreferrer">
                            LINKEDIN
                        </Link>
                        {/* FACEBOOK */}
                    </div>
                    <div>CONSULTATION</div>
                    <div className={styles.privatePolicy} onClick={handlePrivatePolicy}>PRIVACY POLICY</div>
                </div>
                <div className={styles.mobileInfo}>
                    <div>Designed and Developed in India</div>
                    <div>© 2024 Sumfactor. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>

        </section>
    );
}
