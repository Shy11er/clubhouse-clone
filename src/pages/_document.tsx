import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async loadGetInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" style={{ width: "100%", height: "100%" }}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
