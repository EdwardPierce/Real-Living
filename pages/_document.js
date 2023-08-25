import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.3/source/jsCalendar.min.css"
          integrity="sha384-+OB2CadpqXIt7AheMhNaVI99xKH8j8b+bHC8P5m2tkpFopGBklD3IRvYjPekeWIJ"
          crossorigin="anonymous"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Script
          src="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.3/source/jsCalendar.min.js"
          integrity="sha384-JqNLUzAxpw7zEu6rKS/TNPZ5ayCWPUY601zaig7cUEVfL+pBoLcDiIEkWHjl07Ot"
          crossorigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </body>
    </Html>
  );
}
