/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/
import React from "react";
import "./Child.css";

const Child = (props) => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <h3>text：{props.text ? props.text : 'なし' }</h3>
      <h3>obj：{props.obj ? `${props.obj.name} ${props.obj.age} ` : 'なし'}</h3>
    </div>
  );
};

export default Child;
