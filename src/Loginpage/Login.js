import React from "react";
//it will get you the random number
// const userArr =['a','b','c','d','e'];  
const userArr =[{name:'a',age:5},{name:'b',age:10},{name:'c',age:50},{name:'d',age:41},{name:'a',age:5}];

export default function Login({setUserProp}){

  function loginUser(){
    let tempUser =userArr[Math.floor(Math.random()*10)%userArr.length]
    setUserProp(tempUser)
  }
  return(
    <div>
      <button onClick={loginUser}>Login</button>
      <button>Signup</button>
    </div>
  )
}