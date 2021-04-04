import React from 'react';
import currentDate from '../../utils/currentDate';
import defaultDate from '../../utils/defaultDate';
import {QueryOptions} from './index';

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      startDate: defaultDate(),
      endDate: currentDate()
    };
    this.toggleQueryType = this.toggleQueryType.bind(this);
  };

  handleChange(e){
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  preSubmit(e){
     let dateRange = `${this.state.startDate.replace(/-/g,'/')} ${this.state.endDate.replace(/-/g,'/')}`;

     this.props.handleSubmit(e, dateRange);
  }

  toggleQueryType(){
    const targetNode = document.getElementById('endDate');

    if(!targetNode.disabled){
      targetNode.disabled = true;
      targetNode.style.backgroundColor = 'gray';
      this.setState({...this.state, endDate: ''})
    } else {
      targetNode.style.backgroundColor = 'rgba(255,0,0,0.098)';
      targetNode.disabled = false;
      this.setState({...this.state, endDate: currentDate()})
    }
  }

  render() {
    const {handleSubmit, queryData} = this.props;
    return (
      <div id='header'>
        <form id='search-form' onSubmit={(e) => this.preSubmit(e, this.state.dateRange)}>
          <img id='icon-calender' className='icons' src='assets/icon_calender.svg' onClick={this.toggleQueryType}/>
          <input id="startDate" type='date' className='search-box' placeholder='YYYY/MM/DD' name='startDate' onChange={e => this.handleChange(e)} />
          <input id="endDate" type='date' className='search-box' placeholder='YYYY/MM/DD' name='endDate' onChange={e => this.handleChange(e)} style={{display: ''}}/>
          <button type='button' id='search-button' onClick={(e) => this.preSubmit(e, this.state.dateRange)}>
            <img id='icon-search' className='icons' src='assets/icon_search.svg' />
          </button>
        </form>
        <p id='result-counter'>Results: <span>{queryData.length}</span>mail(s)</p>
      </div>
    );
  };
};

export default Header;
