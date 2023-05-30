import React, { FC, PropsWithChildren } from "react";
import { useMedia } from "react-use";
import Image from "next/image";

const HeroHeader: FC = ({}) => {
  // const minimumHeight = calc(100vh - 70px - 2em)
  const isSmallScreen = useMedia(`(max-width: md)`);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <p>yes</p>
        <p>yes</p>
        <p>yes</p>
      </div>
      <div>
        <Image src={"/ov.png"} alt="" height={40} width={40} />
      </div>
    </div>
  );
};

export default HeroHeader;
