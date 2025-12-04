"use client";

import React from "react";

import clsx from "clsx";

import css from "./Label.module.scss";

type LabelProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const Label: React.FC<LabelProps> = ({ className, children }) => {
  return <div className={clsx(css.ui_label, className)}>{children}</div>;
};
