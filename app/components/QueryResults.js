import React from 'react';
import {SingleEmail} from './index';

class QueryResults extends React.Component {
  render(){
    const {queryData, columnFilter} = this.props;
    return (
      <div id="query-data-container" >
        <div id="table-header">
          <p id="to" className="column-to-from" onClick={e => columnFilter(e)}>From</p>
          <p id="from" className="column-to-from" onClick={e => columnFilter(e)}>To</p>
          <p id="subject" className="column-subject" onClick={e => columnFilter(e)}>Subject</p>
          <p id="date" className="column-date" onClick={e => columnFilter(e)}>Date</p>
        </div>
        {queryData.map(
          (singleRecord, idx) => { return <SingleEmail key={idx} email={singleRecord} />}
        )}
      </div>
    )
  }
};

export default QueryResults;
