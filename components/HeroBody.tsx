import React, { FC, PropsWithChildren } from "react";
import HeroHeader from "./HeroHeader";
import Image from "next/image";

interface HeroBodyProps {
  className?: string;
  contentBackground?: string;
  children?: any;
}

const HeroBody: FC<PropsWithChildren<HeroBodyProps>> = ({
  className,
  contentBackground,
  children,
}) => {
  // const minimumHeight = calc(100vh - 70px - 2em)

  return (
    <div
      className={
        className ??
        "flex flex-col bg-gray-100 w-full mx-4 rounded-[40px] my-12  md:mx-12 lg:mx-32 xl:mx-60 overflow-y-hidden"
      }
    >
      <HeroHeader />
      <div
        className={`flex h-full rounded-[40px] mx-2 mb-2  ${
          contentBackground ?? "bg-gray-300"
        } xl:mx-4 xl:mb-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroBody;
