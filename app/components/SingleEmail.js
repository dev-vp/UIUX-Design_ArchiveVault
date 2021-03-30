import React from 'react';

class SingleEmail extends React.Component {

  formatDate(emailDate){
    const currDate = new Date();
    const diff = (currDate.getTime() - emailDate.getTime()) / 86400000; //(1000*60*60*24)
    console.log(diff)
    if(diff < 1){
      //calculate hours & minutes
    }
    if(currDate.getFullYear() === emailDate.getFullYear()){
      //display only month and day if current year
      const monthAbbreviations = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
      const monthName = monthAbbreviations[emailDate.getMonth()];
      return `${monthName} ${(emailDate.getDate()).toString().padStart(2, "0")}`
    }
    return `${emailDate.getFullYear()}/${(emailDate.getMonth()+1).toString().padStart(2, "0")}/${(emailDate.getDate()).toString().padStart(2, "0")}`
  }

  render(){
    const {email, email:{Date}} = this.props;
    return (
      <div className="email-row">
        <div className="email-info">
          <p className="column-to-from row-to-from">{email.To}</p>
          <p className="column-to-from row-to-from">{email.From}</p>
          <p className="column-subject row-subject">{email.Subject}</p>
          <p className="column-date row-date">{this.formatDate(Date)}</p>
        </div>
      </div>
    )
  }
};

export default SingleEmail;
