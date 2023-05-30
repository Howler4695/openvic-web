import React, { FC, PropsWithChildren } from "react";
import { useMedia } from "react-use";
import HeroHeader from "./HeroHeader";
import Image from "next/image";

interface HeroBodyProps {
  children?: any;
}

const HeroBody: FC<HeroBodyProps> = ({}) => {
  // const minimumHeight = calc(100vh - 70px - 2em)
  const isSmallScreen = useMedia(`(max-width: md)`);

  return (
    <div
      style={{
        background: "white",
        display: "flex",
        width: "100%",
        borderRadius: "50px",
        margin: "70px 350px 70px 350px",
      }}
    >
      <HeroHeader />
      <div
        style={{
          backgroundImage: "url('/terrain-map-4-5-23.png')",
          position: "relative",
        }}
      ></div>
    </div>
  );
};

export default HeroBody;
