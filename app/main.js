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
    console.log('Submitted! Date Range =>', dateRange);
    // parse the data based on date range and render to SearchResult Component
    if(dateRange === ''){
      this.setState({...this.state, queryData: []})
    } else {
      // queryData.filter(...);
      this.setState({...this.state, queryData: this.props.data});
    }
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
