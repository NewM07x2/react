import { useState } from "react";
const Example = () => {

  // 変数定義
  let [val, setVal] = useState()
  return (
    <>
      <input 
        type="text"
        onChange={(event) => {
          setVal(event.target.value)
        }}
      />
      = {val}
    </>
  );
};

export default Example;
