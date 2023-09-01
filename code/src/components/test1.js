import React from 'react'

const Test1 = (props) => {
  const testClick = () => {
    console.log('click')
  }

  return (
    <div>
      <button onClick={() => testClick()}>click</button>
    </div>
  )
}
export default Test1