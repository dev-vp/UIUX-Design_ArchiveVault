import React from 'react';
import currentDate from '../../utils/currentDate';
import defaultDate from '../../utils/defaultDate';

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      startDate: defaultDate(),
      endDate: currentDate(),
      toggle: 0
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
    const targetNode1 = document.getElementById('startDate');
    const targetNode2 = document.getElementById('endDate');

    const cleanUp = document.getElementById('toggle-message');
    if (cleanUp){
      document.getElementById('toggle-message').remove();
    }

    const root = document.getElementById('app');
    const toggleMessage = document.createElement('p');
    toggleMessage.id = 'toggle-message';
    toggleMessage.style.position = 'fixed';
    toggleMessage.style.top = '60px';
    toggleMessage.style.right = '46px';
    toggleMessage.style.color = 'red';
    toggleMessage.style.fontWeight = 'bold';
    toggleMessage.style.fontSize = '13px';
    toggleMessage.style.opacity = '0';

    if (this.state.toggle === 0){
      targetNode2.disabled = true;
      targetNode2.style.backgroundColor = 'gray';
      this.setState({...this.state, endDate: '', toggle: 1});
      toggleMessage.innerText = 'Search By Single Date';
      root.appendChild(toggleMessage);
    } else if (this.state.toggle === 1){
      targetNode1.disabled = true;
      targetNode1.style.backgroundColor = 'gray';
      targetNode2.disabled = true;
      targetNode2.style.backgroundColor = 'gray';
      this.setState({...this.state, startDate: 'all', endDate: '', toggle: 2});
      toggleMessage.innerText = 'Return All Records';
      root.appendChild(toggleMessage);
    } else {
      targetNode1.style.backgroundColor = 'rgba(0,128,0,0.098)';
      targetNode1.disabled = false;
      targetNode2.style.backgroundColor = 'rgba(255,0,0,0.098)';
      targetNode2.disabled = false;
      this.setState({...this.state, startDate: defaultDate(), endDate: currentDate(), toggle: 0});
      toggleMessage.innerText = 'Search by Date Range';
      root.appendChild(toggleMessage);
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
