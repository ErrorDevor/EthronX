"use client";

import React from "react";

import clsx from "clsx";
import { useTimeline } from "shared/lib/timeline";
import { mainData } from "shared/data/data";
import css from "./Banner.module.scss";

export const Banner: React.FC = () => {
  const rootRef = useTimeline(
    (timeline, ref) => {
      timeline(ref).to(".aos-banner", {
        opacity: 1,
      });
    },
    { scope: "scope" }
  );

  return (
    <div className={clsx(css.banner, "aos-banner")} ref={rootRef}>
      <h3><span>EthronX AI Presale is live!</span> {mainData.banner}</h3>
    </div>
  );
};
