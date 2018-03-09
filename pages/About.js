
import React, { Component } from 'react';
export default class extends Component{

  constructor(props){
      super(props);

      let { pathname, query } = props.url;
      this.state = { path : pathname, query : query};

  }

  render(){
      return <div className={'mar25'}>
        About {this.state.query.name}
        <p>----------</p>
      </div>;
  }

}
