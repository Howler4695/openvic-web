import React, { FC, PropsWithChildren } from "react";
import HeroHeader from "./HeroHeader";
import Image from "next/image";

interface HeroBodyProps {
  children?: any;
}

const HeroBody: FC<HeroBodyProps> = ({}) => {
  // const minimumHeight = calc(100vh - 70px - 2em)

  return (
    <div className="flex flex-col bg-gray-100 w-full mx-4 rounded-[40px] my-12  md:mx-12 lg:mx-32 xl:mx-60 overflow-y-hidden">
      <HeroHeader />
      <div className=" flex h-full rounded-[40px] mx-2 mb-2  bg-gray-300 xl:mx-4 xl:mb-4"></div>
    </div>
  );
};

export default HeroBody;
