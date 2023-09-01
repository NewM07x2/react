import React from 'react'
import { render } from 'react-dom'

import Human from './model/Human'

// reactにおけるコンポーネントは先頭が大文字とする。使用時は<Component />と記載する。
const ReturnReactElement = props => {
  console.log(props)

  return (
    <h2>
      {props.name} {props.music}
      <Human name='masato' age="29"/>
    </h2>
  );
};
// コンポーネントに対する引数
render(<ReturnReactElement name="masato" music="jazz"/>, document.getElementById("root"));