import React, { FC, PropsWithChildren } from "react";
import { useMedia } from "react-use";

interface PageProps {
  children?: any;
}

const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => {
  // const minimumHeight = calc(100vh - 70px - 2em)
  const isSmallScreen = useMedia(`(max-width: md)`);

  return (
    <main
      style={{
        backgroundImage: "url('/background.png')",
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      {children}
    </main>
  );
};

export default Page;
