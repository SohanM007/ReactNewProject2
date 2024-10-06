import { useState } from "react"
import GrandChild from "./GrandChild" 

export default function Child2(){

const [child2Count ,setChild2Count] = useState(100)
console.log('Child2 called')

  return(
    <>
      <div>Child2: {child2Count}</div>
      <button onClick={() => setChild2Count(child2Count + 1)}>Increase Count Value</button>
      <GrandChild count ={child2Count} />

    </>

  )
}