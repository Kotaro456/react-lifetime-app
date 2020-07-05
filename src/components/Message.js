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
          <li className="message_conditions-list">
            If Your life span is 80years
          </li>
          <li className="message_conditions-list">Sleeping : 8 Hours</li>
          <li className="message_conditions-list">
            Working / School : 10 Hours (including commuter time and break time)
          </li>
          <li className="message_conditions-list">
            0 ~ 6 years old : remove only Sleeping
          </li>
          <li className="message_conditions-list">
            7 ~ 18 years old : Holidays are 140 days, SchoolDays(6h free) are
            225days
          </li>
          <li className="message_conditions-list">
            19 ~ 22 years old : Holidays are 200 days, SchoolDays(6h free) are
            165days
          </li>
          <li className="message_conditions-list">
            23 ~ 65 years old : Holidays are 120 days, WorkDays(6h free) are
            245days
          </li>
          <li className="message_conditions-list">
            66 ~ 80 years old : remove only Sleeping
          </li>
        </ul>
      </div>
    );
  }
}

export default Message;
