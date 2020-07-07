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
    };

    this.calculate = this.calculate.bind(this);
  }

  calculate(userAge) {
    // state.ageを文字列から数値に変換する
    const currentAge = Number(userAge);
    console.log(currentAge);

    // 各年代の総自由時間
    const timeTill6 = 40880;
    const timeTill22 = 59840;
    const timeTill65 = 145770;
    const timeTill80 = 87600;

    // 年齢が0 ~ 6歳までの時
    if (currentAge >= 0 && currentAge <= 6) {
      // 現在の年齢から6歳までの残りの年数
      const LeftYear = 7 - currentAge;

      //   残りの年数 ×　１年間の自由時間
      const freeHour = LeftYear * 5840;

      //   ほかの年代の各総自由時間を足す
      const setLifeTime = freeHour + timeTill22 + timeTill65 + timeTill80;

      //   確認用
      console.log(setLifeTime);
      this.setState({ lifeTime: setLifeTime });

      //   小中高大期間
    } else if (currentAge >= 7 && currentAge <= 22) {
      // 小中高と大学では休日数に差があるため分ける
      // 小中高12年分の自由時間と大学4年分の自由時間
      const timeOfSchool = 43080;
      const timeOfUni = 16760;

      //   小中高
      if (currentAge <= 18) {
        const LeftYear = 19 - currentAge;
        const freeHour = LeftYear * 3590;
        const setLifeTime = freeHour + timeOfUni + timeTill65 + timeTill80;
        console.log(setLifeTime);
        this.setState({ lifeTime: setLifeTime });

        // 大学
      } else {
        const LeftYear = 23 - currentAge;
        const freeHour = LeftYear * 4190;
        const setLifeTime = freeHour + timeTill65 + timeTill80;
        console.log(setLifeTime);
        this.setState({ lifeTime: setLifeTime });
      }

      //   社会人
    } else if (currentAge >= 23 && currentAge <= 65) {
      const LeftYear = 66 - currentAge;
      const freeHour = LeftYear * 3390;
      const setLifeTime = freeHour + timeTill80;
      console.log(setLifeTime);
      this.setState({ lifeTime: setLifeTime });

      //   老後
    } else if (currentAge >= 66) {
      const LeftYear = 81 - currentAge;
      const freeHour = LeftYear * 5840;
      const setLifeTime = freeHour;
      console.log(setLifeTime);
      this.setState({ lifeTime: setLifeTime });
    }
  }

  render() {
    return (
      <div className="lifetime">
        <AppName />
        <Time lifeTime={this.state.lifeTime} />
        <SelectTime calculate={this.calculate} />
        <Message />
      </div>
    );
  }
}

export default LifeTime;
