import React from 'react';
import {SingleEmail} from './index';

class QueryResults extends React.Component {
  render(){
    const {queryData} = this.props;
    return (
      <div id="query-data-container" >
        <div id="table-header">
          <p className="column-to-from">From</p>
          <p className="column-to-from">To</p>
          <p className="column-subject">Subject</p>
          <p className="column-date">Date</p>
        </div>
        {queryData.map(
          (singleRecord, idx) => { return <SingleEmail key={idx} email={singleRecord} />}
        )}
      </div>
    )
  }
};

export default QueryResults;
