import React from "react";

export default function UserDetails({user}){
  return(
    // <div>{user} </div>
    <div>User Details: <span>Name: {user.name} </span> <span>Age:{user.age}</span> </div>
  )
}