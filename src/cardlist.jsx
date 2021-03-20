import React from 'react';
import Card from './card';


const CardList = ({members})=>{
   
    return(
        <div>
            {members.map((user, i) => {
                
                
           return <Card
             
             id={members[i].id} 
             key= {members[i].id} 
             name={members[i].name} 
             photo={members[i].photo}
            
             email={members[i].email} 
             /> 
    })}
        </div>
    );
}
export default CardList;