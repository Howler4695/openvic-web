import React, { FC, PropsWithChildren } from "react";
import { useMedia } from "react-use";

interface PageProps {
  children?: any;
}

const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => {
  // const minimumHeight = calc(100vh - 70px - 2em)

  return (
    <main className=" w-full h-[100vh] flex bg-[url('/background.png')]">
      {children}
    </main>
  );
};

export default Page;
