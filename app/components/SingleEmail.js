import React from 'react';
import {EmailBody} from './index';

class SingleEmail extends React.Component {

  formatDate(emailDate){
    const currDate = new Date();
    const diff = (currDate.getTime() - emailDate.getTime()) / 86400000; //(1000*60*60*24)

    // If less than a day, display 'hour:minute'
    if(diff < 1){
      return `${(emailDate.getHours()).toString().padStart(2,"0")}:${emailDate.getMinutes()}`
    };
    // If current year, display 'month day'
    if(currDate.getFullYear() === emailDate.getFullYear()){
      //display only month and day if current year
      const monthAbbreviations = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
      const monthName = monthAbbreviations[emailDate.getMonth()];
      return `${monthName} ${(emailDate.getDate()).toString().padStart(2, "0")}`
    };
    // else display in YYYY/MM/DD format
    return `${emailDate.getFullYear()}/${(emailDate.getMonth()+1).toString().padStart(2, "0")}/${(emailDate.getDate()).toString().padStart(2, "0")}`
  };

  toggleBody(e,id){
    e.preventDefault();
    let css_id = `email-body-${id}`
    let targetNode = document.getElementById(css_id);

    if(targetNode.hidden){
      targetNode.hidden = false;
    } else {
      targetNode.hidden = true;
    }
  };

  render(){
    const {idx, email, email:{Date}} = this.props;
    return (
      <div className="email-row" onClick={(e) => this.toggleBody(e, idx)}>
        <div className="email-info">
          <img className="icon-mail" src="assets/icon_mail_sp.svg" />
          <p className="column-to-from row-to-from row-to">{email.To}</p>
          <p className="column-to-from row-to-from row-from">{email.From}</p>
          <p className="column-subject row-subject">{email.Subject}</p>
          <div className="column-attachment">{
          email.Attachment ? <img className="clip" src="assets/icon_clip.svg"/>: ''
          }</div>
          <p className="column-date row-date">{this.formatDate(Date)}</p>
        </div>
        <EmailBody id={`email-body-${idx}`} body={email.Body}/>
      </div>
    )
  }
};

export default SingleEmail;
