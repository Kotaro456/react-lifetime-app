import React from "react";

class SelectTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
    };
  }
  render() {
    return (
      <div className="selectTime">
        <input
          type="number"
          className="selectTime__input"
          onChange={(e) => this.setState({ age: e.target.value })}
          min="0"
          max="80"
          placeholder="how old r u?"
        />
        <button
          onClick={() => this.props.calculate(this.state.age)}
          className="selectTime__button"
        >
          Calculate
        </button>
      </div>
    );
  }
}

export default SelectTime;
