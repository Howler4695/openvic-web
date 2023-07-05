import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Open Victoria website Download OpenVic Download Open Victoria Download Open Victoria 2"
          key="desc"
        />
        <meta property="og:title" content="Open Victoria" key="title" />
        <meta
          property="og:description"
          content="Portal for all your OpenVic needs"
          key="share-desc"
        />
        <meta property="og:image" content="/header-logo.svg" key="image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
