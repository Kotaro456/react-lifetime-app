import React from "react";
import AppName from "./AppName";
import SelectTime from "./SelectTime";
import Time from "./Time";
import Message from "./Message";

class LifeTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeTime: undefined,
      age: "0",
    };

    this.calculate = this.calculate.bind(this);
  }

  calculate(userAge) {
    this.setState({ age: userAge });
    // state.ageを文字列から整数に変換する
    const currentAge = parseFloat(this.state.age);
    // 現在の年齢から80歳までの年数
    const leftAge = 80 - currentAge;
    // 睡眠時間(8時間)を引いた残りの16時間の合計
    const leftHours = leftAge * 5840;
    // 仕事や学校などに必要な時間10時間とする
    const usedTime = 2450 * leftAge;
    // 残りの時間から仕事や学校に使った時間を引く　可処分時間
    const lifeTime = leftHours - usedTime;
    // 数値なので文字列に変換
    const setLifeTime = lifeTime.toString();

    this.setState({ lifeTime: setLifeTime });
  }

  render() {
    return (
      <div className="lifetime">
        <AppName />
        <Time lifeTime={this.state.lifeTime} />
        <SelectTime lifeTime={this.state.lifeTime} calculate={this.calculate} />
        <Message />
      </div>
    );
  }
}

export default LifeTime;
