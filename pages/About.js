
import React, { Component } from 'react';
// import App, { Container } from 'next/app';
import NextSeo from 'next-seo';

import myScss from './scss/about.scss';

// import your default seo configuration
const SEO ={
        title: 'About Page',
        description: 'About Page Test',
        canonical: 'https://fifi-ashinga.herokuapp.com/about?name=Ravi',
        openGraph: {
          url: 'https://fifi-ashinga.herokuapp.com/about?name=Ravi',
          title: 'About Page',
          description: 'About Page',
        },
        twitter: {
          handle: '@kesanamravi',
          site: '@kesanamravi',
          cardType: 'summary_large_image',
        },
      };

export default class MyApp extends Component {

  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps };
  // }

  constructor(props){
      super(props);

      let { pathname, query } = props.url;
      this.state = { path : pathname, query : query};

  }

  render(){
    const { Component } = this.props;
      return (<div className={'mar25'}>
          {/* Here we call NextSeo and pass our default configuration to it  */}
          <NextSeo config={SEO} />
            <p className={[myScss.example, myScss.example2].join(' ')}> About {this.state.query.name}</p>
            <p>----------</p>
          </div>
      );
  }

}
