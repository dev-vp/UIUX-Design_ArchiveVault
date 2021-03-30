import React from 'react';
import {ArchiverLogo, QueryResults} from './index';

class SearchResults extends React.Component {
  render(){
    const {queryData} = this.props;
    return (
      <div id="result-container">
        {
          queryData.length < 1 ?
          <ArchiverLogo /> :
          <QueryResults queryData={queryData} />
        }
      </div>
    )
  }
};

export default SearchResults;
