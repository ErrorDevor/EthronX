"use client";

import React from "react";

import clsx from "clsx";
import Image from "shared/ui/base/Image";
import { useTimeline } from "shared/lib/timeline";

import css from "./OurBlog.module.scss";


export const OurBlog: React.FC = () => {
  const rootRef = useTimeline(
    (timeline, ref) => {
      timeline(ref).to(
        ".aos-ourblog-elements",
        { opacity: 1, stagger: 0.15 },
        0
      );
    },
    { scope: "scope" }
  );

  return (
    <section className={css.ourblog_section} ref={rootRef}>
      <div className={css.conteiner}></div>
    </section>
  );
};
