import React from 'react';
import currDate from '../../utils/currentDate';

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      startDate: '',
      endDate: currDate(),
      dateRange: ''
    };
  };

  handleChange(e){
    e.preventDefault();

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      dateRange: `${this.state.startDate.replace(/-/g,'/')}-${this.state.endDate.replace(/-/g,'/')}`
    });
  };

  render() {
    const {handleSubmit, queryData} = this.props;
    return (
      <div id='header'>
        <form id='search-form' onSubmit={(e) => handleSubmit(e, this.state.dateRange)}>
          <img id='icon-calender' className='icons' src='assets/icon_calender.svg' />
          <input type='date' className='search-box' placeholder='YYYY/MM/DD' name='startDate' onChange={e => this.handleChange(e)} />
          <input type='date' className='search-box' placeholder='YYYY/MM/DD' name='endDate' onChange={e => this.handleChange(e)} />
          <button type='button' id='search-button' onClick={(e) => handleSubmit(e, this.state.dateRange)}>
            <img id='icon-search' className='icons' src='assets/icon_search.svg' />
          </button>
        </form>
        <p id='result-counter'>Results: <span>{queryData.length}</span>mail(s)</p>
      </div>
    );
  };
};

export default Header;
