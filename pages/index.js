import Head from 'next/head';
import Link from 'next/link';
import global from "../styles/styles.js";
import React, { Component } from 'react';
// import css from "../styles/styles.min.css"

import stylesheet from 'antd/dist/antd.min.css';
import { DatePicker } from 'antd';
import { Avatar, Badge } from 'antd';

export default class extends Component{


  render(){
    return <div >
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
        <Link href={{ pathname: '/about', query: { name: 'Ravi' } }}>
          <a>About Page</a>
        </Link>
      </p>

      <p>
      <DatePicker />
      </p>

      <p>
      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
      </p>

      </div>
    </div>

  }
}
