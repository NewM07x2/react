import React from 'react'
import { render } from 'react-dom'

// const returnReactElement = () => {
//   return <h2>text</h2>;
// };

// return は省略可能
// const returnReactElement2 = () => <h2>text2</h2>;

// 引数を受け取り JSX 内で使用するアロー関数
// const returnReactElement3 = hello => <h2>{hello}</h2>;

// 引数を元に、新しい文字列を作って使用するアロー関数
// const returnReactElement4 = (no, name) => {
//   const newStrings = `${no}番目は${name}さんです。`;
//   return <h2>{newStrings}</h2>;
// };

// reactにおけるコンポーネントは先頭が大文字とする。使用時は<Component />と記載する。
const ReturnReactElement = props => {
  console.log(props)
  return (
    <h2>
      {props.name} {props.music}
    </h2>
  );
};
// コンポーネントに対する引数
render(<ReturnReactElement name="masato" music="jazz"/>, document.getElementById("root"));