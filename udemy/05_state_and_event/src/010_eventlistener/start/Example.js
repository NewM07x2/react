const Example = () => {
  const clickHandler1 = () => {
    alert('クリックされました。1')
  }
  const clickHandler2 = () => {
    alert('クリックされました。2')
    clickHandler1()
  }

  return (
    <>
      <button onClick={clickHandler1}>クリック</button>
      <button onClick={clickHandler2}>クリック</button>
    </>
  );
};

export default Example;
