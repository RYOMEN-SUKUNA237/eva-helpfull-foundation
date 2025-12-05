"use client";

import React, { useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "up" | "none";

type RevealTag = "div" | "section" | "header" | "main" | "article" | "span" | "a";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  direction?: Direction;
  as?: RevealTag;
  once?: boolean;
}

export function Reveal({
  children,
  direction = "up",
  as: Tag = "div",
  once = true,
  className = "",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (visible && once) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node as Element);

    return () => {
      observer.disconnect();
    };
  }, [visible, once]);

  const dirAttr = direction === "up" || direction === "none" ? undefined : direction;

  const Component: any = Tag;

  return (
    <Component
      ref={ref as any}
      data-direction={dirAttr}
      className={`reveal-section ${visible ? "is-visible" : ""} ${className}`}
      {...(rest as any)}
    >
      {children}
    </Component>
  );
}
