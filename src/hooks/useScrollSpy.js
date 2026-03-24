import { useState, useEffect } from "react";

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const listeners = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        { rootMargin: `-${offset}px 0px -70% 0px` },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      listeners.forEach((observer) => observer?.disconnect());
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
