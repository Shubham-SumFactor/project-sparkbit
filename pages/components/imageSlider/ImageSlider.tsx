import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

const images = [
  { src: '/Image1.webp', alt: 'Person with dog' },
  { src: '/Image2.webp', alt: 'Person working on laptop' },
  { src: '/Image3.webp', alt: 'Team meeting' },
  { src: '/Image4.webp', alt: 'Person at desk with plant' },
  { src: '/Image5.webp', alt: 'Person standing' },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.imageSection}>
      {isMobile && (
        //    <div className={styles.navigationButtons}>
        //    <button className={styles.navButton} onClick={handlePrev}>←</button>
        //    <button className={styles.navButton} onClick={handleNext}>→</button>
        //  </div>

        <div className={styles.navigationButtons}>
          <button onClick={handlePrev} className={styles.navButton}>
            <Image src="/leftArrowImage.svg" alt="whatwedo" height={20} width={20} className={styles.sliderArrow} />
          </button>
          <button onClick={handleNext} className={styles.navButton}>
            <Image src="/leftArrowImage.svg" alt="whatwedo" height={20} width={20} />

          </button>
        </div>
      )}
      <div
        className={styles.imageContainer}
        style={isMobile ? { transform: `translateX(-${currentSlide * 100}%)` } : {}}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;