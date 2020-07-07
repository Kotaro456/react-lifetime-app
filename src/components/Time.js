import React from "react";

class Time extends React.Component {
  render() {
    return (
      <div>
        {this.props.lifeTime !== undefined ? (
          <h1>You have {this.props.lifeTime} hours</h1>
        ) : (
          <h1>You have %?$& hours</h1>
        )}
      </div>
    );
  }
}

export default Time;
