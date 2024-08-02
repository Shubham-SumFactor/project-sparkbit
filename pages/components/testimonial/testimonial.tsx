import React, { useState, useRef, useEffect } from 'react';
import styles from './testimonial.module.css';
import Image from 'next/image';

const testimonials = [
    {
        content: "Our challenging mission to revolutionize the culinary market called for a partner with deep knowledge of algorithms and machine learning techniques, along with solid software engineering skills and flexible thinking. We found all of that in Sparkbit. Their ability to take ownership of a project and their technical capabilities to develop end-to-end solutions are what make them the perfect partner for us.",
        author: "TOMER EDEN",
        position: "CEO & CO-FOUNDER",
        company: "SPICERR",

    },
    {
        content: "After an extensive search and in-depth reference checks, we chose Sparkbit to be our partner in solving previously unsolvable problems. They were able to provide us with AI and ML experts who grasped the complexities of our unique requirements and were able to deliver AI models. But they also found opportunities for us to reduce compute costs by identifying those areas where the answer was just math.",
        author: "ANNE ZINK",
        position: "CEO & FOUNDER ",
        company: "5X5 TECHNOLOGIES",
        videoSrc: "/testimonial01.mp4"
    },
    {
        content: "Sparkbit has the intellectual rigor to handle quite difficult problems that are at the intersection of, for example, distributed systems, AI and the specific vertical that your business is.",
        author: "Tim Mansfield",
        position: "CTO",
        company: "ITALIST",
        videoSrc: "/testimonial2.mp4"
    },
    {
        content: "The app that Sparkbit developed was met with a great reaction, including a significant number of users. The product was successful and the project is in its next phase. Throughout the partnership, the attentive team has completed their work while ensuring as much accuracy as possible.",
        author: "Laszlo Toeroek",
        position: "CTO & Co-Founder",
        company: "Altermobili"

    },
    {
        content: "They proved to be extremely competent and reliable software engineers capable of solving complicated algorithmic problems.",
        author: "Undisclosed",
        position: "Senior Executive",
        company: "Telematics Insurance Enterprise"

    },
    {
        content: "Not only have they done what we’ve asked them to, they've always taken it to the next level and looked for unique ways to solve problems for us, and I could not recommend them more.",
        author: "Jeff Burde",
        position: "President & Co-founder",
        company: "PHY",
        videoSrc: "/testimonial3.mp4"

    },
];

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        setIsPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsPlaying(false);
    };

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const testimonial = testimonials[currentSlide];

    return (
        <section className={styles.testimonialSlider}>
            <div className={styles.container}>
                <h3 className={styles.sideHeading}>TESTIMONIALS</h3>

                <div className={styles.content}>
                    <h1 className={styles.mainHeading}>Our clients about us</h1>
                    <div className={styles.navigation}>
                        <button onClick={prevSlide} className={styles.navButton}>
                            <Image src="/leftArrowImage.svg" alt="whatwedo" height={20} width={20} className={styles.sliderArrow} />
                        </button>
                        <button onClick={nextSlide} className={styles.navButton}>
                            <Image src="/leftArrowImage.svg" alt="whatwedo" height={20} width={20} />

                        </button>
                    </div>
                    <div className={styles.testimonial}>
                        {testimonial.videoSrc ? (
                            <div className={styles.videoAndContentContainer}>
                                <div className={styles.videoContainer}>
                                    <video
                                        ref={videoRef}
                                        src={testimonial.videoSrc}
                                        className={styles.video}
                                    />
                                    <div className={styles.videoControls}>
                                        <button onClick={toggleVideo} className={styles.videoButton}>
                                            {isPlaying ? '⏸' : '▶'}
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.testimonialContentContainer}>
                                    <p className={styles.testimonialContent}>{testimonial.content}</p>
                                    <p className={styles.author}>{testimonial.author}</p>
                                    <p className={styles.position}>{testimonial.position}</p>
                                    <p className={styles.company}>{testimonial.company}</p>
                                </div>
                            </div>

                        ) : null}

                        {!testimonial.videoSrc ? (
                            <div className={styles.testimonialContentContainer2}>
                                <p className={styles.testimonialContent2}>{testimonial.content}</p>
                                <p className={styles.author}>{testimonial.author}</p>
                                <p className={styles.position}>{testimonial.position}</p>
                                <p className={styles.company}>{testimonial.company}</p>
                            </div>
                        ) : null}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialSlider;