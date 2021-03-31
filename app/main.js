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
      queryData: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getData();
  };

  handleSubmit(e, dateRange){
    e.preventDefault();
    const validFormat = new RegExp('....\/..\/..', 'g');
    const queryInput = dateRange.match(validFormat);
    let startDate, endDate;

    // Empty Query & Invalid Date Formats
    if(dateRange === '' || !validFormat.test(dateRange)){
      this.setState({...this.state, queryData: []});
      alert('Please use a valid date format (YYYY/MM/DD).');
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
    };

    console.log(startDate,'-',endDate)

    // Filter Data Based on Query Date(s)
    // queryData.filter(...);
    this.setState({...this.state, queryData: this.props.data});
  };

  render(){
    let {data} = this.props;
    console.log(data);
    return (
      <div id="main">
        <Header handleSubmit={this.handleSubmit}/>
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
