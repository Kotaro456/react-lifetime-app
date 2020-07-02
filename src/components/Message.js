import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div className="message">
          <p className="message__text">Have you thought your time?</p>
          <p className="message__text">
            I show you your time without Sleeping, Working, School
          </p>

        <ul className="message__conditions">
          <li className="message_conditions-list">If Your life span is 80years</li>
          <li className="message_conditions-list">Sleeping : 8 Hours</li>
          <li className="message_conditions-list">Working / School : 8 Hours</li>
        </ul>
      </div>
    );
  }
}



export default Message;