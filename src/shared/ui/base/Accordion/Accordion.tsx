"use client";

import React from "react";

import clsx from "clsx";

import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";

import css from "./Accordion.module.scss";

/* Children */

enum DisplayNames {
  BUTTON = "ACCORDEON_BUTTON",
  CONTENT = "ACCORDEON_CONTENT",
}

interface SubChildren {
  children: React.ReactNode;
}

const Button: React.FC<SubChildren> = ({ children }) => {
  return children;
};

const Content: React.FC<SubChildren> = ({ children }) => {
  return children;
};

Button.displayName = DisplayNames.BUTTON;
Content.displayName = DisplayNames.CONTENT;

/* Accordeon */
type AccordeonChildrenProps = {
  active: boolean;
  toggle: () => void;
};

type AccordeonChildren =
  | ((props: AccordeonChildrenProps) => React.ReactNode)
  | React.ReactNode;

interface AccordeonProps {
  children: AccordeonChildren;
  initialOpen?: boolean;
  closeOnClickOut?: boolean;
  clickableRoot?: boolean;
  smooth?: boolean;
  disabled?: boolean;
  className?: string;
  classNameActive?: string;
  duration?: number;
  controllerActive?: boolean;
  setConrollerActive?: (bool: boolean) => void;
}

const Accordion: React.FC<AccordeonProps> = ({
  children,
  initialOpen = false,
  smooth = false,
  disabled = false,
  closeOnClickOut = false,
  clickableRoot = false,
  duration = 200,
  className,
  classNameActive,
  controllerActive,
  setConrollerActive,
}) => {
  const [active, setActive] = React.useState(initialOpen);
  const firstRenderRef = React.useRef(true);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const rootRef = useClickOutside(() => closeOnClickOut && setActive(false));

  const stateActive = React.useMemo(() => {
    if (typeof controllerActive !== "undefined") {
      return controllerActive;
    }
    return active;
  }, [active, controllerActive]);

  const setStateActive = React.useCallback(
    (bool: boolean) => {
      if (typeof setConrollerActive !== "undefined") {
        setConrollerActive(bool);
      } else {
        setActive(bool);
      }
    },
    [active, controllerActive, setActive, setConrollerActive]
  );

  const toggle = () => {
    if (disabled === false) {
      setStateActive(!stateActive);
    }
  };

  const toggleRoot = () => {
    if (clickableRoot) {
      toggle();
    }
  };

  React.useEffect(() => {
    if (contentRef.current) {
      const el = contentRef.current;
      el.style.height = `${stateActive ? el.scrollHeight : 0}px`;
    }
    firstRenderRef.current = false;
  });

  const childrenArray = React.Children.toArray(
    typeof children === "function"
      ? (children({ active: stateActive, toggle }) as any).props.children
      : children
  );

  const button = childrenArray.find(
    (child: any) => child.type && child.type.displayName === DisplayNames.BUTTON
  );
  const content = childrenArray.find(
    (child: any) =>
      child.type && child.type.displayName === DisplayNames.CONTENT
  );
  const rest = childrenArray.find(
    (child: any) =>
      child.type &&
      child.type.displayName !== DisplayNames.CONTENT &&
      child.type.displayName !== DisplayNames.BUTTON
  );

  return (
    <div
      className={clsx(
        css.accordeon,
        disabled && css.accordeon_disabled,
        smooth && css.accordeon_smooth,
        stateActive && ["accordeon-active", classNameActive],
        className
      )}
      onClick={toggleRoot}
      ref={rootRef}
    >
      <div className={css.button} onClick={toggle}>
        {button}
      </div>

      <div
        className={css.content}
        style={{ transitionDuration: smooth ? `${duration}ms` : undefined }}
        data-initial-open={firstRenderRef.current && active}
        ref={contentRef}
      >
        {content}
      </div>
      {rest}
    </div>
  );
};

export default Object.assign(Accordion, { Button, Content });
