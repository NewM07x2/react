import React from 'react'

export const Child = () => {
  return (
    <>
      { /* ↓↓↓ Childコンポーネントに移動 */ }
      <div className="component">
        <h3>Child Component</h3>
      </div>
      { /* ↑↑↑ Childコンポーネントに移動 */ }
    </>
  )
}
