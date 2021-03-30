import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div id='header'>
        <form id='search-form'>
          <img id='icon-calender' class='icons' src='assets/icon_calender.svg' />
          <input type='daterange' id='search-box' placeholder='YYYY/MM/DD' />
          <button type='submit' id='search-button'>
            <img id='icon-search' class='icons' src='assets/icon_search.svg' />
          </button>
        </form>
        <p id='result-counter'>Results: <span>0</span>mail(s)</p>
      </div>
    );
  };
};

export default Header;
