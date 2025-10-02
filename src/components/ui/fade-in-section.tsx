'use client';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const FadeInSection = ({
  children,
  className,
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity ease-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};
