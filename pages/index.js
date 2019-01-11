import Head from 'next/head';
import Link from 'next/link';
// import global from "../styles/styles.js";
import React, { Component } from 'react';

// import stylesheet from 'antd/lib/style/index.css';
// import style_badge from 'antd/lib/badge/style/index.css';


import DatePicker from 'antd/lib/date-picker';
import Avatar from 'antd/lib/avatar';
import Badge from 'antd/lib/badge';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class extends Component{


  render(){
    return <div >
      {/*<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <style dangerouslySetInnerHTML={{ __html: style_badge }} />
*/}
      {/*<style jsx>{global}</style>
      <style jsx>{`
      .custom {
        color: green;
        span {
          color: violet;
        }
      }
      `}</style>*/}


      <Head>
        <title>Fifi - A BoilerPlate of Next JS + ANT Design + Redux + Styled JSX with SCSS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={'header'}></div>

      <div className=" gutter container">
      <h1 className="dodger">Fifi</h1>
      <h3 className={['ebony']}>ReactJS + SEO + NextJS + Styled JSX + ANT Design</h3>

      <p className={'example'}>
        <Link href={{ pathname: '/about', query: { name: 'Ravi' } }}>
          <a>About Page</a>
        </Link>
      </p>

      <p>
      <DatePicker />
      <RangePicker />
      </p>


      <p>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="Default" />
        <Badge status="Processing" />
        <Badge status="Warning" />
        <Badge style={{ backgroundColor: '#52c41a' }} count={65}></Badge>
      </p>


      </div>
    </div>

  }
}
