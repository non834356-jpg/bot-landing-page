import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const SplitTextReveal = ({ text, className = "", delay = 0, as: Tag = "h2" }: SplitTextRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLSpanElement>("[data-char]");
    const ctx = gsap.context(() => {
      gsap.from(chars, {
        yPercent: 120,
        opacity: 0,
        rotateX: -80,
        stagger: 0.025,
        duration: 0.9,
        delay,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [delay]);

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.25em]" style={{ perspective: 600 }}>
          {Array.from(w).map((c, ci) => (
            <span key={ci} className="inline-block overflow-hidden align-baseline">
              <span data-char className="inline-block will-change-transform">{c}</span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};
