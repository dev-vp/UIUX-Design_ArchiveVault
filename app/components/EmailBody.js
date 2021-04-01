import React from 'react';

class EmailBody extends React.Component {
  render(){
    const {id, body} = this.props;
    return (
      <div id={id} className="email-body-preview" hidden={true}>
        <p>{body}</p>
      </div>
    )
  }
};

export default EmailBody;
