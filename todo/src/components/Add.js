import React from "react";

export class Add extends React.Component {
  constructor(props) {
    super(props);
    // 初期値を設定する。
    this.state = { word: "" };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.word} onChange={this.handleChange} />
          <input type="submit" value="Add to todo list" />
        </form>
      </div>
    )
  }

  handleSubmit = event => {
    // ページ遷移を止める
    event.preventDefault()
    // Listへ追加する。
    this.props.addTodo(this.state.word)
    // 追加後は入力項目は初期化する。
    this.setState({ word: "" })
  }
  // input の内容を変更した場合に発動するメソッド
  handleChange = event => {
    // value を取得する
    const word = event.target.value
    this.setState({ word: word })
  }
}