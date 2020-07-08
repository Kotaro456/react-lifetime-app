import React from "react";

class Time extends React.Component {
  render() {
    return (
      <div>
        {this.props.lifeTime !== undefined ? (
          <div>
            <h1>You have {this.props.lifeTime} HOURS</h1>
            <h1>You have {this.props.lifeDay} DAYS</h1>
          </div>
        ) : (
          <div>
            <h1>You have %?$& HOURS</h1>
            <h1>You have %?$& DAYS</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Time;
