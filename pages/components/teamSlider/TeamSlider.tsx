import { useState, useEffect } from 'react';
import styles from './TeamSlider.module.css';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}


const teamMembers = [
  { name: 'Mr. Choji', role: 'Director', image: '/sumfactorTeam/choji.jpg' },
  { name: 'Ajay Sharma', role: 'CEO', image: '/sumfactorTeam/ajay.jpg' },
  { name: 'Rohit Thakur', role: 'Tech Lead', image: '/sumfactorTeam/rohit.jpg' },
  { name: 'Pradeep Singh', role: 'HR Admin', image: '/sumfactorTeam/pradeep.jpg' },

  { name: 'Neeraj Sharma', role: 'Project Co-ordinator', image: '/sumfactorTeam/neeraj.jpg' },
  { name: 'Sucheta Verma', role: 'Senior UI/UX Designer', image: '/sumfactorTeam/sucheta.jpg' },
  { name: 'Prashant Yadav', role: 'Senior Android Developer ', image: '/sumfactorTeam/prashantsir.jpg' },
  { name: 'Vikas Rana', role: 'Quality Analyst', image: '/sumfactorTeam/vikas.jpg' },
  { name: 'Shubham Thakur', role: 'Junior Software Engineer', image: '/sumfactorTeam/shubhamPic.jpg' },

];

const TeamMember = ({ name, role, image } : TeamMemberProps ) => (
  <div className={styles.teamMember}>
    <img src={image} alt={name} className={styles.memberImage} />
    <h3 className={styles.memberName}>{name}</h3>
    <p className={styles.memberRole}>{role}</p>
  </div>
);

interface TeamSliderProps {
  teamMembers: TeamMemberProps[];
}

const TeamSlider = () => {
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

const itemsPerSlide = isMobile ? 1 : 3;
const slidesCount = Math.ceil(teamMembers.length / itemsPerSlide);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
  }, 5000);
  return () => clearInterval(timer);
}, [slidesCount]);

const handlePrev = () => {
  setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesCount) % slidesCount);
};

const handleNext = () => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
};

return (
  <section className={styles.teamSlider}>
    {/* <div className={styles.navigationButtons}>
      <button className={styles.navButton} onClick={handlePrev}>←</button>
      <button className={styles.navButton} onClick={handleNext}>→</button>
    </div> */}
     <div className={styles.navigationButtons}>
          <button onClick={handlePrev} className={styles.navButton}>
            <Image src="/leftArrowImage.svg" alt="whatwedo" height={20} width={20} className={styles.sliderArrow} />
          </button>
          <button onClick={handleNext} className={styles.navButton}>
            <Image src="/leftArrowImage.svg" alt="whatwedo" height={20} width={20} />

          </button>
        </div>
    <div 
      className={styles.sliderContainer} 
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {[...Array(slidesCount)].map((_, index) => (
        <div key={index} className={styles.slide}>
          {teamMembers.slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide).map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      ))}
    </div>
  </section>
);
};

export default TeamSlider;