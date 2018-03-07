import Head from 'next/head';
import Link from 'next/link';
import css from "../styles/styles.scss";
// import css from "../styles/styles.min.css"

export default () =>
<div style={{ color : 'red' }}>

  <style jsx>{`
  .custom {
    color: green;
    span {
      color: violet;
    }
  }
  `}</style>

  Welcome to next.js!
  <Head>
    <title>TON</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <img src="/static/images/logo.svg" />

  <div className={css.example}>
    Click{' '}
    <Link href={{ pathname: '/About', query: { name: 'Zeit' } }}>
      <a>here</a>
    </Link>{' '}
    to read more read moreeeeee
  </div>

  <div className="custom">

    Hola

    <span>hohohoh </span>

  </div>

</div>
