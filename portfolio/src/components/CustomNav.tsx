import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

type NavItem = {
  label: string;
  href: string;
  ariaLabel: string;
};

export interface CustomNavProps {
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
}

const CustomNav: React.FC<CustomNavProps> = ({
  className = "",
  ease = "power3.out",
  baseColor = "#ffffff",
  menuColor = "#000000",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pillsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pillTlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

  const navItems: NavItem[] = [
    { label: "Home", href: "#home", ariaLabel: "Go to Home section" },
    { label: "Skills", href: "#skills", ariaLabel: "Go to Skills section" },
    {
      label: "Experience",
      href: "#experience",
      ariaLabel: "Go to Experience section",
    },
    {
      label: "Education",
      href: "#education",
      ariaLabel: "Go to Education section",
    },
    {
      label: "Projects",
      href: "#projects",
      ariaLabel: "Go to Projects section",
    },
    {
      label: "Certifications",
      href: "#certifications",
      ariaLabel: "Go to Certifications section",
    },
    { label: "Contact", href: "#contact", ariaLabel: "Go to Contact section" },
  ];

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 8;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 130;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(pillsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      pillsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  // Setup pill logic with expanding circles
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        pillTlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        pillTlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener("resize", onResize);
  }, [ease]);

  const handlePillEnter = (i: number) => {
    const tl = pillTlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handlePillLeave = (i: number) => {
    const tl = pillTlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setPillRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) pillsRef.current[i] = el;
  };

  return (
    <div
      className={`custom-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[800px] md:max-w-[1000px] z-[99] top-[5px] ${className}`}>
      <nav
        ref={navRef}
        className={`custom-nav ${
          isExpanded ? "open" : ""
        } block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor }}>
        <div className="nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          {/* Hamburger Menu (= sign) */}
          <div
            className={`hamburger-menu ${
              isHamburgerOpen ? "open" : ""
            } group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-1 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor }}>
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75`}
            />
          </div>

          {/* Harsh in the center */}
          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-2 md:order-none">
            <span className="font-bold text-xl tracking-wide bg-gradient-neon bg-clip-text text-transparent">
              Harsh
            </span>
          </div>

          {/* Empty space for balance */}
          <div className="order-3 md:order-none w-[30px]" />
        </div>

        {/* Navigation Content with Pills */}
        <div
          className={`nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 md:p-4 flex flex-wrap md:flex-nowrap items-center justify-center gap-1 md:gap-2 z-[1] ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          }`}
          aria-hidden={!isExpanded ? "true" : "false"}>
          {navItems.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-pill relative overflow-hidden inline-flex items-center justify-center h-10 md:h-12 px-4 md:px-8 rounded-full bg-black text-white font-semibold text-xs md:text-sm uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer"
              ref={setPillRef(idx)}
              style={{
                background: "linear-gradient(135deg, #001021 0%, #001021 100%)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                minWidth: "80px",
                maxWidth: "120px",
                flex: "1 1 auto",
              }}
              onMouseEnter={() => handlePillEnter(idx)}
              onMouseLeave={() => handlePillLeave(idx)}>
              {/* Expanding circle */}
              <span
                className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                style={{
                  background: "#ffffff",
                  willChange: "transform",
                }}
                aria-hidden="true"
                ref={(el) => {
                  circleRefs.current[idx] = el;
                }}
              />
              {/* Label stack */}
              <span className="label-stack relative inline-block leading-[1] z-[2]">
                <span
                  className="pill-label relative z-[2] inline-block leading-[1]"
                  style={{ willChange: "transform" }}>
                  {item.label}
                </span>
                <span
                  className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                  style={{
                    color: "#000000",
                    willChange: "transform, opacity",
                  }}
                  aria-hidden="true">
                  {item.label}
                </span>
              </span>
              <a
                href={item.href}
                className="absolute inset-0 w-full h-full flex items-center justify-center no-underline z-[4]"
                aria-label={item.ariaLabel}></a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CustomNav;
