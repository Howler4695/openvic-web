import React, { FC, PropsWithChildren } from "react";
import { useMedia } from "react-use";
import Image from "next/image";
import Link from "next/link";

interface HeroHeaderProps {
  className?: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({ className }) => {
  // const minimumHeight = calc(100vh - 70px - 2em)
  const isSmallScreen = useMedia(`(max-width: md)`);

  return (
    <div
      className={
        className ??
        "flex w-full justify-between px-10 py-4 items-center h-28 relative"
      }
    >
      <div className="flex">
        <Link
          href="/contribute"
          className="text-sm font-serif font-semibold text-gray-600 hover:text-red-900 mr-4"
        >
          CONTRIBUTE
        </Link>
        <Link
          href="/news"
          className="text-sm font-serif font-semibold text-gray-600 hover:text-red-900 mr-4"
        >
          NEWS
        </Link>
        <Link
          href="/about"
          className="text-sm font-serif font-semibold text-gray-600 hover:text-red-900 mr-4"
        >
          ABOUT
        </Link>
        <Link
          href="/faqs"
          className="text-sm font-serif font-semibold text-gray-600 hover:text-red-900"
        >
          FAQs
        </Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/" className="fill-black hover:fill-red-900">
          <Image
            src="/ov.svg"
            alt=""
            height={80}
            width={80}
            className="invert"
          />
        </Link>
      </div>
      <div className="flex">
        <Link
          href="/downloads"
          className="py-2.5 px-5 text-sm font-semibold font-serif focus:outline-none rounded-full  border border-gray-500  text-gray-600 hover:text-gray-200 hover:bg-red-900 hover:border-red-900 "
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default HeroHeader;
