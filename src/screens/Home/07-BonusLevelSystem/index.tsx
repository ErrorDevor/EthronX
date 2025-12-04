"use client";

import React from "react";

import clsx from "clsx";
import Image from "shared/ui/base/Image";
import { useTimeline } from "shared/lib/timeline";

import css from "./BonusLevelSystem.module.scss";


export const BonusLevelSystem: React.FC = () => {
  const rootRef = useTimeline(
    (timeline, ref) => {
      timeline(ref).to(
        ".aos-bonuslevel-elements",
        { opacity: 1, stagger: 0.15 },
        0
      );
    },
    { scope: "scope" }
  );

  return (
    <section className={css.bonuslevel_section} ref={rootRef}>
      <div className={css.conteiner}></div>
    </section>
  );
};
