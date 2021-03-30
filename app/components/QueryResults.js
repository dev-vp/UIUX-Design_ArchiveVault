import React from 'react';
import {SingleEmail} from './index';

class QueryResults extends React.Component {
  render(){
    const {queryData} = this.props;
    return (
      <div id="query-data-container" >
        <div id="table-header">
          <p>From</p>
          <p>To</p>
          <p>Subject</p>
          <p>Date</p>
        </div>
        {queryData.map(
          (singleRecord, idx) => { return <SingleEmail key={idx} email={singleRecord} />}
        )}
      </div>
    )
  }
};

export default QueryResults;
