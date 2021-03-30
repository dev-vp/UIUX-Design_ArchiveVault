import React from 'react';
import {connect} from 'react-redux';
import {getDataThunk} from '../redux/fetchData';

class Header extends React.Component {

  componentDidMount(){
    this.props.getData();
  };

  render() {
    const {data} = this.props;
    console.log('render:', data)
    return (
      <div id='header'>
        <form id='search-form'>
          <img id='icon-calender' className='icons' src='assets/icon_calender.svg' />
          <input type='daterange' id='search-box' placeholder='YYYY/MM/DD' />
          <button type='submit' id='search-button'>
            <img id='icon-search' className='icons' src='assets/icon_search.svg' />
          </button>
        </form>
        <p id='result-counter'>Results: <span>0</span>mail(s)</p>
      </div>
    );
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
