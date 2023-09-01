import React from 'react'
import './assets/css/App.css'
import Test1 from './components/test1'

function App() {
  // const [count, setCount] = useState("")
  return (
    <div className="App">
      {/* {count} */}
      <Test1 name="masato" age="29"/>
    </div>
  );
}

export default App
