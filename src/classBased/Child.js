import React from "react"
export default class child extends React.Component{
constructor(){
  super();
  this.state= {counter:0,willComponent:true}
}

// state = {counter:10}   //New syntax

 
hnadleChnageState =()=>{
  this.setState({counter:this.state.counter+1})
}


  render(){
    return(
      <>
       {this.state.willComponent && <div>child class Based component {this.props.title}</div>}
        <div>Counter:{this.state.counter}</div>
        <button onClick={this.hnadleChnageState}>Change a state</button>
      </>
    )
  }
}