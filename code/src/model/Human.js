import React from "react";

// reactでclassを定義する場合はReact.Componentを継承する。
export default class Human extends React.Component {
  constructor(props) {
    // obj作成時に変数定義外部
    super(props);
    // state にて変数を定義する。
    this.state = { name: "masato" };
  }

  onButtonClick = (word) => {
    console.log('onButtonClick')
    // setState で state を変更する setState にはオブジェクトを渡す
    this.setState({ name: word })
  }
  // render は必須
  // コンポーネントが呼び出された時に返す内容
  render() {
    // console.log(this)
    return (
      <h3>
        {this.state.name} {this.props.age}
        <button onClick={() => this.onButtonClick('nitta')}>nitta</button>
        <button onClick={() => this.onButtonClick('masato')}>masato</button>
      </h3>
    );
  }
  // state は内部の値
  // props は外部から受け取った値
}