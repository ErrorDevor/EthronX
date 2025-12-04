import React from "react";

import clsx from "clsx";
import Image from "../../base/Image";
import Marquee from "react-fast-marquee";

import css from "./Marquee.module.scss";

interface MarqueeProps {
  className?: string;
}

const Images = [
  { id: 1, src: "/images/Marquee/m1.png" },
  { id: 2, src: "/images/Marquee/m2.png" },
  { id: 3, src: "/images/Marquee/m3.png" },
  { id: 4, src: "/images/Marquee/m4.png" },
  { id: 5, src: "/images/Marquee/m5.png" },
  { id: 6, src: "/images/Marquee/m6.png" },
  { id: 7, src: "/images/Marquee/m7.png" },
];

export const Label: React.FC<MarqueeProps> = ({ className }) => {
  return (
    <div className={clsx(css.marquee, className)}>
      {Images.map((items) => (
        <Marquee key={items.id}>
          <Image.Default className={css.marquee_img} src={items.src} />
        </Marquee>
      ))}
    </div>
  );
};
