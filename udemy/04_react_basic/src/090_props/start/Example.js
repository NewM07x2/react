import Child from "./components/Child";

const Example = () => {
  return (
    <>
      <Child/>
      <Child text='変更値' obj={{ name: 'Tom', age: 18 }} bool={true}/>
    </>
  )
}

export default Example;
