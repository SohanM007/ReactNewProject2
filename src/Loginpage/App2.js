import React ,{useState} from "react";
import UserDetails from "./UserDetails";
import Login from "./Login";
import EditUserDetails from "./EditUserDetails";

export default function App2(){
  const[user,setUser]= useState('');

  function handleUserState(userValue){
    setUser(userValue)
  }
 
  function editUserAge(age){
    // const userTemp ={...user};
    // userTemp.age =age;
    // setUser(userTemp);
          // or
    
    setUser({...user,age:age})
//  ..,user will destructure the user and we will get {name:'sohan',age:10} but age:age will get another value and it will overwirte this
  }

  function editUserName(name){
    setUser({...user,name:name})

  }
  
  return(
    <>
      {user ?
        <>
      <UserDetails user={user}/>:
       <EditUserDetails user={user} editUserAge={editUserAge} editUserName ={editUserName}/>
       </>
       :
      <Login setUserProp={handleUserState}/>}
    </>
  )
}