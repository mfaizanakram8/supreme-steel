'use client';
import { useEffect } from 'react';
import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import InfiniteMovingCards from '@/components/InfiniteMovingCards';
import ServicesSection from '@/components/ServicesSection';
import WhyUs from '@/components/WhyUs';
import MediaSection from '@/components/MediaSection';

const Page: React.FC = () => {
  useEffect(() => {
 
    const isDesktop = () => window.innerWidth > 768;

    const cursor = document.querySelector(".cursor") as HTMLElement;

    const updateCursorPosition = (e: MouseEvent) => {
      if (!isDesktop()) return; // Disable for non-desktop
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
    };

    const enlargeCursorOnHover = () => {
      if (isDesktop()) cursor.classList.add("cursor-hover");
    };

    const shrinkCursor = () => {
      if (isDesktop()) cursor.classList.remove("cursor-hover");
    };

    if (isDesktop()) {
      document.addEventListener("mousemove", updateCursorPosition);
      const hoverElements = document.querySelectorAll(".hover-effect");
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", enlargeCursorOnHover);
        el.addEventListener("mouseleave", shrinkCursor);
      });
    }

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div>
      {/* Custom cursor */}
      <div className="cursor hidden md:block"></div>

      <HeroSection />
      <InfiniteMovingCards />
      <ServicesSection />
      <AboutSection />
      <WhyUs />
      <MediaSection />
    </div>
  );
};

export default Page;
