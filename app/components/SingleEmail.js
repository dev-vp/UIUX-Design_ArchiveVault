import React from 'react';

class SingleEmail extends React.Component {
  render(){
    const {email, email:{Date}} = this.props;
    return (
      <div className="email-row">
        <div className="email-info">
          <p className="column-to-from">{email.To}</p>
          <p className="column-to-from">{email.From}</p>
          <p className="column-subject subject-row">{email.Subject}</p>
          <p className="column-date row-date">{`${Date.getFullYear()}/${(Date.getMonth()+1).toString().padStart(2, "0")}/${(Date.getDate()).toString().padStart(2, "0")}`}</p>
        </div>
      </div>
    )
  }
};

export default SingleEmail;
