"use client";

import React, { useState, useEffect, useRef } from "react";

import clsx from "clsx";
import { NextLink } from "shared/ui/base/NextLink";
import Image from "shared/ui/base/Image";
import { useTimeline } from "shared/lib/timeline";
import { mainData } from "shared/data/data";
import { MainButton } from "shared/ui/ui-kit/Button/MainButton";

import css from "./Header.module.scss";

export const Header: React.FC = () => {
  const rootRef = useTimeline(
    (timeline, ref) => {
      timeline(ref)
        .to(".aos-header", {
          opacity: 1,
        }).to(".aos-header-menu", { opacity: 0.5, y: 0, stagger: 0.2 }, 0.1)
        .to(".aos-header-scale", { opacity: 1, scale: 1 }, 0.1);
    },
    { scope: "scope" }
  );

  return (
    <header className={css.header_block} ref={rootRef}>
      <NextLink className={clsx(css.logo_block, "aos-header")} href="/">
        <Image.Default src="/logo.svg" />
        <h4>{mainData.header.logo}</h4>
      </NextLink>

      <ul className={css.header_menu}>
        {mainData.header.menu.map((items) => (
          <li key={items.id} className={clsx(css.header_menu_items, "aos-header-menu")}>
            {items.title}
          </li>
        ))}
      </ul>

      <div className={clsx(css.button_conteiner, "aos-header-scale")}>
        <MainButton>{mainData.header.button}</MainButton>
      </div>
    </header>
  );
};
