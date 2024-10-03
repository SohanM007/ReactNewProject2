import React ,{useState} from 'react'
import Comp from './Comp.js'

export default function App(){
  const [isComponent ,setIsComponent] = useState(false);
  const [isLoading,setLoading] = useState(true);

  function toggleComp(){
    setIsComponent(!isComponent)
  }
  return(
    <>
      {/* {isComponent ? <Comp/> :null} */}
      {isComponent && <Comp/>}
      <button onClick={toggleComp}>Toggle Component State</button>
    </>

  )
}