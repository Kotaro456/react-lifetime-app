import React from "react";

class SelectTime extends React.Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
  }
  calculate(e) {
    e.preventDefault();

    this.props.calculate(e.target.elements.UserAge.value);
  }
  render() {
    return (
      <div className="selectTime">
        <form onSubmit={(e) => this.calculate(e)}>
          <input
            type="number"
            name="UserAge"
            className="selectTime__input"
            // これで入力された値をstateにsetする
            min="0"
            max="80"
            placeholder="how old r u?"
          />
          <button className="selectTime__button">Calculate</button>
        </form>
      </div>
    );
  }
}

export default SelectTime;
