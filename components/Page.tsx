import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";

interface PageProps {
  children?: any;
}

const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => {
  return (
    <main className=" w-full h-[100vh] flex bg-[url('/background.png')]">
      <Head>
        <title>Open Victoria - OpenVic</title>
      </Head>
      {children}
    </main>
  );
};

export default Page;
