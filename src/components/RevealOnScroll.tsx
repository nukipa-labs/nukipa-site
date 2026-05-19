'use client';

import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode
} from 'react';

type RevealTag = 'div' | 'section' | 'li' | 'article' | 'ul' | 'p';

interface RevealOnScrollProps {
  children: ReactNode;
  /** Optional stagger delay in ms applied via inline transition-delay */
  delayMs?: number;
  /** Optional override of the bottom-trigger margin (default: trigger 12% in) */
  rootMargin?: string;
  className?: string;
  /** Wrapper tag - defaults to 'div' */
  as?: RevealTag;
}

/**
 * IntersectionObserver-driven fade-up on scroll. Adds `.revealed` to the
 * underlying element once it enters the viewport; the CSS in globals.css
 * runs the transition from `opacity: 0; translateY(28px)` to visible.
 *
 * Honours `prefers-reduced-motion: reduce` - the element snaps to visible
 * with no transition.
 */
export function RevealOnScroll({
  children,
  delayMs,
  rootMargin = '0px 0px -12% 0px',
  className,
  as = 'div'
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined;

  return createElement(
    as,
    {
      ref: (node: HTMLElement | null) => {
        ref.current = node;
      },
      'data-reveal': '',
      className,
      style
    },
    children
  );
}
