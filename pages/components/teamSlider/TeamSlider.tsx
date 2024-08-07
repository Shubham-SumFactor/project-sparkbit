import { useState, useEffect } from 'react';
import styles from './TeamSlider.module.css';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}


const teamMembers = [
  { name: 'Jędrek Fulara', role: 'cto  & co–founder', image: '/JedrekFulara.webp' },
  { name: 'Kornel Kania', role: 'AI Delivery Consultant', image: '/KornelKania.webp' },
  { name: 'Dominika Kaczmarczyk', role: 'ux designer', image: '/DominikaKaczmarczyk.webp' },
  { name: 'Piotr Wojnarowski', role: 'SENIOR DEVELOPER', image: '/PiotrWojnarowski.svg' },

  { name: 'Ola Pawlak ', role: 'Project Manager ', image: '/OlaPawlak.svg' },
  { name: 'Bartek Różański ', role: 'Senior Developer ', image: '/Bartek.webp' },
  { name: 'Mateusz Gołuchowski ', role: 'QA ', image: '/Mateusz.webp' },
  { name: 'Maciek Wikira ', role: 'Tech Lead ', image: '/Maciek.webp' },

  { name: 'Marcin Kamionowski ', role: 'Senior Developer ', image: '/Marcin.svg' },
  { name: 'kacper jabłoński', role: 'developer', image: '/Mateusz.webp' },
  { name: 'Justyna Bobińska', role: 'Office Manager ', image: '/Justyna.webp' },
  { name: 'Jan Pułtorak', role: 'Junior Developer ', image: '/Jan.webp' },

  { name: 'Jakub Skupień ', role: 'Project Manager ', image: '/Jakub.svg' },
  { name: 'filip czaplicki', role: 'senior developer', image: '/filip.webp' },
  { name: 'Bartosz Wojciechowski', role: 'Product Manager', image: '/Bartos.webp' },
  { name: 'Yaroslava Tkachuk', role: 'Developer ', image: '/Yaroslava.webp' },

  { name: 'Szymon Bemowski', role: 'Tech Lead', image: '/Szymon.svg' },
  { name: 'Mateusz Zalewski', role: 'developer', image: '/MateusZale.webp' },
  { name: 'Tomek Pieszczek', role: 'developer', image: '/Tomek.webp' },
  { name: 'Arek Ziehm', role: 'Senoir Developer ', image: '/Arek.webp' },

  { name: 'michał kręglewski', role: 'ceo & co–founder', image: '/michal.webp' },
  { name: 'kornelia frankowska', role: 'project manager', image: '/kornelia.webp' },
  { name: 'mikołaj czapp', role: 'Developer ', image: '/mikola.webp' },
  { name: 'Kuba Grondziowski', role: 'developer', image: '/Kuba.svg' },

  { name: 'łukasz pejas', role: 'senior developer', image: '/lukas.webp' },
  { name: 'marek krasowski', role: 'senior developer', image: '/marek.webp' },
  { name: 'kasia fulara', role: 'coo & co–founder ', image: '/kasia.webp' },
  { name: 'Rafał Starypan', role: 'developer', image: '/Rafal.webp' },

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

const itemsPerSlide = isMobile ? 1 : 4;
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