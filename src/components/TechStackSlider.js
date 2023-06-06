import { useState, useEffect } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
  SiGit,
  SiVercel,
  SiPlanetscale,
} from 'react-icons/si';

const languageIcons = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
  SiGit,
  SiVercel,
  SiPlanetscale,
];

const TechStackSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState([]);

  useEffect(() => {
    const initialIcons = languageIcons.slice(0, 3);
    setVisibleIcons(initialIcons);

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % languageIcons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextVisibleIcons = languageIcons.slice(
        currentSlide,
        currentSlide + 3
      );
      setVisibleIcons(nextVisibleIcons);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className='flex overflow-hidden rounded-lg'>
      {visibleIcons.map((Icon, index) => (
        <div
          key={index}
          className={`mx-2 ${index === 1 ? 'opacity-100' : 'opacity-50'}`}
        >
          <Icon className='w-24 h-24' />
        </div>
      ))}
    </div>
  );
};

export default TechStackSlider;
