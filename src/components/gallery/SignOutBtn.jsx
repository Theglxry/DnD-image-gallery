import React from 'react'
import { signOut } from "firebase/auth"; //for the signout in nav when created
import {database} from "../../libs/firebase";
import { useNavigate } from "react-router-dom";


function SignOut() {
  const history = useNavigate();


  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };





  return (
    <div> 
    
    <button className="border-2 p-2 bg-slate-300" onClick={handleClick}>SignOut</button>
    
    
    </div>
  )
}

export default SignOut