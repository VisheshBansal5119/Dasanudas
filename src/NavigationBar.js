import React from "react";

const Nav = ({onRouteChange}) => {
  return(

<div>
<span onClick={()=>onRouteChange('signin')}
style={{color:"white", fontSize: "25px", 
display: "flex", justifyContent:"flex-end", marginRight:"15px",
textDecoration:"underline"}}
className="f3 dim pointer">Sign Out</span>
</div>
  )  
}

export default Nav