import React from 'react';
import {SingleEmail} from './index';

class QueryResults extends React.Component {
  render(){
    const {queryData, columnFilter} = this.props;
    return (
      <div id="query-data-container" >
        <div id="table-header">
          <p
            id="to"
            className="column-to-from toggle-color"
            onClick={e => columnFilter(e)}
            style={{color: 'gray'}}
          >From
          <img src="assets/icon_arrow01.svg" className="filter-icons" id="to-asc" hidden={true}/>
          <img src="assets/icon_arrow01.svg" className="filter-icons rotate-180" id="to-desc" hidden={true}/>
          </p>

          <p
            id="from"
            className="column-to-from toggle-color"
            onClick={e => columnFilter(e)}
            style={{color: 'gray'}}
          >To
          <img src="assets/icon_arrow01.svg" className="filter-icons" id="from-asc" hidden={true}/>
          <img src="assets/icon_arrow01.svg" className="filter-icons rotate-180" id="from-desc" hidden={true}/>
          </p>

          <p
            id="subject"
            className="column-subject toggle-color"
            onClick={e => columnFilter(e)}
            style={{color: 'gray'}}
          >Subject
          <img src="assets/icon_arrow01.svg" className="filter-icons" id="subject-asc" hidden={true}/>
          <img src="assets/icon_arrow01.svg" className="filter-icons rotate-180" id="subject-desc" hidden={true}/>
          </p>

          <p
            id="date"
            className="column-date toggle-color"
            onClick={e => columnFilter(e)}
            style={{color: 'black'}}
          >Date
            <img src="assets/icon_arrow01.svg" className="filter-icons" id="date-asc"/>
            <img src="assets/icon_arrow01.svg" className="filter-icons rotate-180" id="date-desc" hidden={true}/>
          </p>
        </div>
        {queryData.map(
          (singleRecord, idx) => { return <SingleEmail key={idx} email={singleRecord} />}
        )}
      </div>
    )
  }
};

export default QueryResults;
