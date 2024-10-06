import React ,{useState} from "react";
import Child from './Child'
import Child2 from './Child2'


console.log('global component state')

export default function App(){
  console.log('App recalled')
  // it's gonna print the App recalled every time whan you click on increase count value button

  const[count,setCount] =useState(0);
  return(
    <>
    {/* {console.log('here')} */}
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase Count Value</button>
       
       <h1>Child Component Area</h1>
      <Child count ={count} />
      <Child2/>
    
    </>
  )
}