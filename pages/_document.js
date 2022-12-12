import Document, { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
    render() {
        return (
          <Html lang="en">
            <Head>
              <link
                rel="preload"
                href="/fonts/IBMPlexSans-Bold.ttf"
                as="font"
                crossOrigin="anonymous"
              ></link>
              <link
                rel="preload"
                href="/fonts/IBMPlexSans-Regular.ttf"
                as="font"
                crossOrigin="anonymous"
              ></link>
              <link
                rel="preload"
                href="/fonts/IBMPlexSans-SemiBold.ttf"
                as="font"
                crossOrigin="anonymous"
              ></link>
            </Head>
            <body>
              <Main></Main>
              <NextScript />
            </body>
          </Html>
        );
    }
}

export default MyDocument;