import React from 'react';

class SingleEmail extends React.Component {

  formatDate(Date){
    // calculate and add additional formatting based on some criteria...
    return `${Date.getFullYear()}/${(Date.getMonth()+1).toString().padStart(2, "0")}/${(Date.getDate()).toString().padStart(2, "0")}`
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
