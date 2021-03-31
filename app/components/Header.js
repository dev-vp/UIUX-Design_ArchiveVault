import React from 'react';

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      dateRange: '',
    };
  };

  handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const {handleSubmit, queryData} = this.props;
    return (
      <div id='header'>
        <form id='search-form' onSubmit={(e) => handleSubmit(e, this.state.dateRange)}>
          <img id='icon-calender' className='icons' src='assets/icon_calender.svg' />
          <input type='daterange' id='search-box' placeholder='YYYY/MM/DD' name='dateRange' onChange={e => this.handleChange(e)} />
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
