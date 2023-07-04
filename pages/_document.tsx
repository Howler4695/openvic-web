import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Open Victoria - OpenVic">
        <meta
          name="description"
          content="Open Victoria website Download OpenVic Download Open Victoria Download Open Victoria 2"
          key="desc"
        />
        <meta property="og:title" content="Open Victoria" />
        <meta
          property="og:description"
          content="Portal for all your OpenVic needs"
        />
        <meta property="og:image" content="/header-logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
