/* @flow */
import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import styleSheet from "styled-components/lib/models/StyleSheet";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // https://github.com/zeit/next.js/blob/2.1.1/examples/with-styled-components/pages/_document.js
    const page = renderPage();
    const styles = (
      <style
        dangerouslySetInnerHTML={{
          __html: styleSheet.rules().map(rule => rule.cssText).join("\n"),
        }}
      />
    );
    return { ...page, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
