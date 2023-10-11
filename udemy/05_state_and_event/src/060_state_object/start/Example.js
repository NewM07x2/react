import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)
  const changeName = (event) => {
    setPerson({...person, name: event.target.value})
  }
  const changeAge = (event) => {
    setPerson({...person, age: event.target.value})
  }
  return (
    <>
      <h3>name: {person.name}</h3>
      <h3>age: {person.age}</h3>
      <input
        type="text"
        value={person.name} onChange={changeName}
      />
      <input
        type="number"
        value={person.age} onChange={changeAge}
      />
    </>
  )
};

export default Example;
