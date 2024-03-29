import React, { type FC } from "react";
import { useMedia } from "react-use";
import Image from "next/image";
import Link from "next/link";

type HeroHeaderProps = {
  className?: string;
};

const HeroHeader: FC<HeroHeaderProps> = ({ className }) => {
  const isSmallScreen = useMedia("(max-width: md)");

  return (
    <div
      className={
        className ??
        "flex w-full justify-between px-10 py-4 items-center h-28 relative min-h-[102px]"
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
        <Link href="/">
          <Image src="/logo.svg" alt="OpenVic Logo" height={80} width={80} />
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
