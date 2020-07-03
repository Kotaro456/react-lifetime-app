import React from "react";

class SelectTime extends React.Component {
  render() {
    return (
      <div className="selectTime">
        <input
          type="text"
          className="selectTime__input"
          placeholder="Please fill in your age"
        />
        <button onClick={this.props.calculate} className="selectTime__button">
          Calculate
        </button>
      </div>
    );
  }
}

export default SelectTime;
