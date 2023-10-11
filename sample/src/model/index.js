class Index {
  // constructor はクラスからインスタンスを作成した時に実行される
  constructor(num) {
    // this は作成されたインスタンスを指す
    this.nanumme = num;
  }

  // クラスメソッド
  // クラスが持つファンクションのこと
  click() {
    // 自分自身の値を参照するためにここでも this を使う
    console.log('click', this.num);
  }
}

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