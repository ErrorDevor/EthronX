"use client";

import React from "react";

import clsx from "clsx";
import Image from "shared/ui/base/Image";
import { useTimeline } from "shared/lib/timeline";

import css from "./Footer.module.scss";

interface Props {
  data?: string;
}

export const Footer: React.FC<Props> = ({ data }) => {
  const rootRef = useTimeline(
    (timeline, ref) => {
      timeline(ref).to(
        ".aos-footer-elements",
        { opacity: 1, stagger: 0.15 },
        0
      );
    },
    { scope: "scope" }
  );

  return (
    <footer className={css.footer_section} ref={rootRef}>
      <div className={css.conteiner}></div>
    </footer>
  );
};
