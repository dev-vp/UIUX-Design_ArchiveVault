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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getData();
  };

  handleSubmit(e){
    e.preventDefault();
    console.log('Submitted')
  };

  render(){
    let {data} = this.props;
    console.log(data);
    return (
      <div id="main">
        <Header handleSubmit={this.handleSubmit}/>
        <SearchResult />
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
