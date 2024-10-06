 import React from "react";
 import Child from "./Child";

export default class Car extends React.Component{

  render(){
    return(
      <>
    <div>Class Based component</div>
    <Child title={'abcd'} />
    </>
    )
  }

}