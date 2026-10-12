"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function OpeningScrollScene({ children }: { children: ReactNode }) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const productPanel = scene.querySelector<HTMLElement>("[data-opening-products]");
    const desktopMotion = window.matchMedia("(min-width: 64.0625rem)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const setStatic = () => {
      scene.removeAttribute("data-scroll-motion");
      scene.style.removeProperty("--intro-opacity");
      scene.style.removeProperty("--intro-shift");
      scene.style.removeProperty("--index-opacity");
      scene.style.removeProperty("--products-opacity");
      scene.style.removeProperty("--products-offset");
      scene.style.removeProperty("--cover-scale");
      if (productPanel) {
        productPanel.inert = false;
        productPanel.removeAttribute("aria-hidden");
      }
    };

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!desktopMotion.matches || reducedMotion.matches) {
          if (scene.hasAttribute("data-scroll-motion")) setStatic();
          return;
        }

        scene.dataset.scrollMotion = "true";
        const travel = Math.max(scene.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, -scene.getBoundingClientRect().top / travel));
        const introProgress = Math.min(1, progress / 0.34);
        const productsProgress = Math.min(1, Math.max(0, (progress - 0.2) / 0.45));

        scene.style.setProperty("--intro-opacity", String(1 - introProgress));
        scene.style.setProperty("--intro-shift", `${introProgress * -36}px`);
        scene.style.setProperty("--index-opacity", String(1 - Math.min(1, progress / 0.2)));
        scene.style.setProperty("--products-opacity", String(productsProgress));
        scene.style.setProperty("--products-offset", `${(1 - productsProgress) * 36}px`);
        scene.style.setProperty("--cover-scale", String(1 + progress * 0.035));

        if (productPanel) {
          const hidden = productsProgress < 0.9;
          productPanel.inert = hidden;
          if (hidden) productPanel.setAttribute("aria-hidden", "true");
          else productPanel.removeAttribute("aria-hidden");
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    desktopMotion.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      desktopMotion.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
      setStatic();
    };
  }, []);

  return <div className="opening-sequence" ref={sceneRef}><div className="opening-stage">{children}</div></div>;
}
