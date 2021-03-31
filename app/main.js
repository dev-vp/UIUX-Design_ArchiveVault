import React from 'react';
import {connect} from 'react-redux';
import {getDataThunk} from './redux/fetchData';
import sortChar from '../utils/sortChar';
import sortDate from '../utils/sortDate';
import {
  Header,
  SearchResult
} from './components';
import '../public/stylesheet.css';

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      queryData: [],
      archiveData: [],
      filterTo: 'desc',
      filterFrom: 'desc',
      filterSubject: 'desc',
      filterDate: 'desc'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.columnFilter = this.columnFilter.bind(this);
  }

  async componentDidMount(){
    await this.props.getData();
    let defaultView = await this.props.data.sort((a,b) => sortDate(a,b,'desc'));
    this.setState({...this.state, archiveData: defaultView});
  };

  /***** COLUMN FILTER *****/
  columnFilter(e){
    console.log('Clicked. Filter Function Triggered.')
    console.log('Target:', e.target.id)
    console.log('this context', this.state.queryData) //undefined
    if(e.target.id === 'to'){
      this.state.filterTo === 'asc' ?
      this.setState({...this.state, filterTo: 'desc', filterFrom: 'desc', filterSubject: 'desc', filterDate: 'desc'}) :
      this.setState({...this.state, filterTo: 'asc', filterFrom: 'desc', filterSubject: 'desc', filterDate: 'desc'});
      this.state.filterTo === 'asc' ? this.state.queryData.sort((a,b) => sortChar(a,b,'asc')) : this.state.queryData.sort((a,b) => sortChar(a,b,'desc'))
    };
    if(e.target.id === 'from'){
      this.state.filterFrom === 'asc' ?
      this.setState({...this.state, filterTo: 'desc', filterFrom: 'desc', filterSubject: 'desc', filterDate: 'desc'}) :
      this.setState({...this.state, filterTo: 'desc', filterFrom: 'asc', filterSubject: 'desc', filterDate: 'desc'});
      this.state.filterFrom === 'asc' ? this.state.queryData.sort((a,b) => sortChar(a,b,'asc')) : this.state.queryData.sort((a,b) => sortChar(a,b,'desc'))
    };
    if(e.target.id === 'subject'){
      this.state.filterSubject === 'asc' ?
      this.setState({...this.state, filterTo: 'desc', filterFrom: 'desc', filterSubject: 'desc', filterDate: 'desc'}) :
      this.setState({...this.state, filterTo: 'desc', filterFrom: 'desc', filterSubject: 'asc', filterDate: 'desc'});
      this.state.filterSubject === 'asc' ? this.state.queryData.sort((a,b) => sortChar(a,b,'asc')) : this.state.queryData.sort((a,b) => sortChar(a,b,'desc'))
    };
    if(e.target.id === 'date'){
      this.state.filterDate === 'asc' ?
      this.setState({...this.state, filterTo: 'desc', filterFrom: 'desc', filterSubject: 'desc', filterDate: 'desc'}) :
      this.setState({...this.state, filterTo: 'desc', filterFrom: 'desc', filterSubject: 'desc', filterDate: 'asc'});
      this.state.filterDate === 'asc' ? this.state.queryData.sort((a,b) => sortDate(a,b,'asc')) : this.state.queryData.sort((a,b) => sortDate(a,b,'desc'))
    };
  };

  /***** QUERY SUBMIT HANDLER *****/
  handleSubmit(e, dateRange){
    e.preventDefault();
    const validFormat = new RegExp('....\/..\/..', 'g');
    const queryInput = dateRange.match(validFormat);
    let startDate, endDate;

    if(dateRange === 'ALL' || dateRange === 'all' || dateRange === 'All'){
      this.setState({...this.state, queryData: this.props.data});
      return;
    }

    // Empty Query & Invalid Date Formats
    if(dateRange === '' || !validFormat.test(dateRange)){
      this.setState({...this.state, queryData: []});
      alert(`Please use a valid date format.
      (YYYY/MM/DD); or
      (YYYY/MM/DD - YYYY/MM/DD)`);
      return;
    };

    // Single Date Queries
    if(queryInput.length === 1){
      startDate = new Date(
        ...(queryInput[0].split('/').map((x, idx) => {
            if(idx === 1){
              return parseInt(x) - 1;
            } else {
              return parseInt(x);
            };
          }))
        );
      endDate = undefined;

      let filteredData = this.state.archiveData.filter((email) =>
        email.Date.getFullYear() === startDate.getFullYear() &&
        email.Date.getMonth() === startDate.getMonth() &&
        email.Date.getDate() === startDate.getDate()
      );

      this.setState({...this.state, queryData: filteredData});
    };

    // Date Range Queries
    if(queryInput.length === 2){
      startDate = new Date(
        ...(queryInput[0].split('/').map((x, idx) => {
          if(idx === 1){
            return parseInt(x) - 1;
          } else {
            return parseInt(x);
          };
        }))
      );
      endDate = new Date(
        ...(queryInput[1].split('/').map((x, idx) => {
          if(idx === 1){
            return parseInt(x) - 1;
          } else {
            return parseInt(x);
          };
        }))
      );
      //Check for valid date range
     if(startDate.getTime() > endDate.getTime()){
       alert(`Invalid Date Range.
       Start Date: ${startDate.getFullYear()}/${startDate.getMonth()}/${startDate.getDate()} -
       End Date: ${endDate.getFullYear()}/${endDate.getMonth()}/${endDate.getDate()}`);
       return;
     };

      let filteredDataRange = this.state.archiveData.filter((email) =>
      startDate.getTime() <= email.Date.getTime() &&
      endDate.getTime() >= email.Date.getTime()
      );

      this.setState({...this.state, queryData: filteredDataRange});
    };

    console.log(startDate,'-',endDate)
  };

  render(){
    return (
      <div id="main">
        <Header handleSubmit={this.handleSubmit} queryData={this.state.queryData}/>
        <SearchResult queryData={this.state.queryData} columnFilter={this.columnFilter}/>
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    data: state.FetchDataReducer
  };
};

function mapDispatchToProps(dispatch){
  return {
    getData: () => dispatch(getDataThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
