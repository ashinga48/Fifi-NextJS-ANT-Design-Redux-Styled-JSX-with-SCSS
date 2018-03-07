import Head from 'next/head';
import Link from 'next/link';
import global from "../styles/styles.js";
// import css from "../styles/styles.min.css"

export default () =>
<div >
  <style jsx>{global}</style>
  <style jsx>{`
  .custom {
    color: green;
    span {
      color: violet;
    }
  }
  `}</style>


  <Head>
    <title>Fifi - A BoilerPlate of Next JS + ANT Design + Redux + Styled JSX with SCSS</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>

  <div className={'header'}></div>

  <div className=" gutter container">
  <h1 className="dodger">Fifi</h1>
  <h3 className={['ebony']}>ReactJS + Redux + NextJS + Styled JSX + ANT Design</h3>

  <p className={'example'}>
    <Link href={{ pathname: '/About', query: { name: 'Zeit' } }}>
      <a>Sample Page</a>
    </Link>
  </p>

  </div>
</div>
