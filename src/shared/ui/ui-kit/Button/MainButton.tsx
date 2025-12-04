import React from "react";

import clsx from "clsx";
import css from "./MainButton.module.scss";

type MainButtonProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
  };

export const MainButton = <T extends React.ElementType = "button">({
  as,
  className,
  speed = "6s",
  thickness = 4,
  children,
  ...rest
}: MainButtonProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={clsx(css.border_container, className)}
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      <div
        className={css.border_gradient_bottom}
        style={{
          animationDuration: speed,
        }}
      ></div>
      <div
        className={css.border_gradient_top}
        style={{
          animationDuration: speed,
        }}
      ></div>
      <div className={css.inner_content}>{children}</div>
    </Component>
  );
};
