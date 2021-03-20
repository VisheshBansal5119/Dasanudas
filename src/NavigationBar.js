import React from "react";

const Nav = ({onRouteChange, isSignedIn}) => {
  
if(isSignedIn){
  return(
    <div>
    <span onClick={()=>onRouteChange('signin')}
    style={{color:"white", fontSize: "25px", 
    display: "flex", justifyContent:"flex-end",
    textDecoration:"underline"}}
    className="f3 dim pointer pa3">Sign Out</span>
    </div>
     
  );
}
  else{
    return(
      <div style={{color:"white", fontSize: "25px", 
      display: "flex", justifyContent:"flex-end", margin:"0,0,0,0",
      textDecoration:"underline"}}>

    <p onClick={()=>onRouteChange('signin')}
    className="f3 dim pointer pa2">Signin</p>
    <p onClick={()=>onRouteChange('register')}
    
    className="f3 dim pointer pa2">Register</p>
    
    </div>
    );
  }
}
  


export default Nav