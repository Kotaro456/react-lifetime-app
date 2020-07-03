import React from "react";

class Time extends React.Component {
  render() {
    return (
      <div>
        <h1>You have</h1>
        {this.props.lifeTime !== undefined && <p>{this.props.lifeTime}hours</p>}
      </div>
    );
  }
}

export default Time;
