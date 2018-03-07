import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>

        <Head>
          <link rel="stylesheet" type="text/css" href="/static/styles/global.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
