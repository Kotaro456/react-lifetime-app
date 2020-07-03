import React from "react";

class SelectTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "0",
    };
  }
  render() {
    return (
      <div className="selectTime">
        <form name="form">
          <input
            type="number"
            className="selectTime__input"
            onChange={(e) => this.setState({ age: e.target.value })}
            max="80"
            placeholder="how old r u?"
          />
        </form>
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
