import { useState } from "react";
const Example = () => {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(10)
  const [countC, setCountC] = useState(20)

  return (
    <>
    <p>{countA}</p>
    <button onClick={() => setCountA(countA + 1)}>buttonA</button>
    <p>{countB}</p>
    <button onClick={() => setCountB(countB + 10)}>buttonA</button>
    <p>{countC}</p>
    <button onClick={() => setCountC(countC + 20)}>buttonA</button>
    </>
  ) 
};

export default Example;
