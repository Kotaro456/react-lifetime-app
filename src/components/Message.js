import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="appName__message">
          <p className="appName__message-text">Have you thought your time?</p>
          <p className="appName__message-text">
            I show you your time without Sleeping, Working, School
          </p>
        </div>

        <ul>
          <li>If Your life span is 80years</li>
          <li>Sleeping : 8 Hours</li>
          <li>Working / School : 8 Hours</li>
        </ul>
      </div>
    );
  }
}


export default Message;