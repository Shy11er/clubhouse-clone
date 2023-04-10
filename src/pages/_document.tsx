import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ width: "100%", height: "100%" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clubhouse CLone</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}