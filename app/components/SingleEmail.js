import React from 'react';

class SingleEmail extends React.Component {
  render(){
    const {email} = this.props;
    return (
      <div className="email-row">
        <div className="primary-info">
          <p>{email.To}</p>
          <p>{email.From}</p>
          <p>{email.Subject}</p>
          <p>01/10/2021</p>
        </div>
        <div className="secondary-info">

        </div>
      </div>
    )
  }
};

export default SingleEmail;
