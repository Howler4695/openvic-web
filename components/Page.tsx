import React, { type FC, type PropsWithChildren } from "react";
import Head from "next/head";
import { block } from "million/react";

type PageProps = {
  children?: any;
};

const Page: FC<PropsWithChildren<PageProps>> = block(({ children }) => (
  <main className=" w-full h-[100vh] flex bg-[url('/background.png')]">
    <Head>
      <title>Open Victoria - OpenVic</title>
    </Head>
    {children}
  </main>
));

export default Page;
