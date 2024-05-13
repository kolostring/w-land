import { useState, useEffect, useLayoutEffect } from 'react';

export default function useScroll(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
  
    useLayoutEffect(() => {
      function handleScroll() {
        setScrollPosition(window.scrollY);
        setIsScrolling(true);
      }
      function handleScrollEnd() {
        setIsScrolling(false);
      }

      window.addEventListener('scroll', handleScroll);
      window.addEventListener("scrollend", handleScrollEnd);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return  {scrollPosition, isScrolling};
  }