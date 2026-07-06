import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageEnter(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = ref.current?.querySelectorAll<HTMLElement>(".hero-enter");
      if (heroEls?.length) {
        gsap.from(heroEls, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
          clearProps: "opacity",
        });
      }

      const fadeEls = ref.current?.querySelectorAll<HTMLElement>(".fade-in");
      if (fadeEls?.length) {
        fadeEls.forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => {
              gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto",
              });
            },
            onLeaveBack: () => gsap.set(el, { y: 24, opacity: 0 }),
          });
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}
