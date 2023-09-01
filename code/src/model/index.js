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