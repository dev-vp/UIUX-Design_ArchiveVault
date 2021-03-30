import React from 'react';
import {Header, SearchResult} from './components';
import '../public/stylesheet.css';

export default class Main extends React.Component{
  render(){
    return (
      <div id="main">
        <Header />
        <SearchResult />
      </div>
    )
  }
};
