import React from 'react';
import {connect} from 'react-redux';
import {getDataThunk} from './redux/fetchData';
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
      archiveData: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    await this.props.getData();
    this.setState({...this.state, archiveData: this.props.data});
  };

  handleSubmit(e, dateRange){
    e.preventDefault();
    const currDate = new Date();
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
      alert('Please use a valid date format (YYYY/MM/DD).');
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
        ...(queryInput[0].split('/').map((x, idx) => {
          if(idx === 1){
            return parseInt(x) - 1;
          } else {
            return parseInt(x);
          };
        }))
      );
      //Check for valid date range
      /*
      ! fix this
      */
      if(startDate.getTime() > endDate.getTime()){
        alert(`Invalid Date Range. Start Date: ${startDate}. End Date: ${endDate}`);
        return;
      };
      /*
      ! filter for date range queries, setState, and then break
      */
    };

    console.log(startDate,'-',endDate)

    // TEMPORARY DEV FALL BACK TO SHOW ALL DATA
    // this.setState({...this.state, queryData: this.props.data});
  };

  render(){
    // let {data} = this.props;
    // console.log(data);
    return (
      <div id="main">
        <Header handleSubmit={this.handleSubmit} queryData={this.state.queryData}/>
        <SearchResult queryData={this.state.queryData}/>
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
