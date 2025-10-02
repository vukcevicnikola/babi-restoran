'use client';
import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-up',
}: AnimatedSectionProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const animationClasses = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
    'fade-left': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
  };

  const { initial, animate } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? animate : initial,
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};