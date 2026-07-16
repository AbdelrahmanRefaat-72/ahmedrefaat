import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollWidth(scrolled);
      } else {
        setScrollWidth(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-slate-100 dark:bg-slate-800">
      <div 
        className="h-full bg-medical-600 dark:bg-medical-400 transition-all duration-75 ease-out rounded-r"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}
