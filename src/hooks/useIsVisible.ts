import { useEffect, useState } from 'react';

const useIsVisible = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting),
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
    return () => {};
  }, []);

  return isIntersecting;
};

export default useIsVisible;
