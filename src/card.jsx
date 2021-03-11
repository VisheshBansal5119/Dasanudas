import React from 'react';



const Card =({photo,name,id,email}) => {
    

    return (

        <div className='bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <a href={email}><img  alt='Yuvak' src={photo} width="300" height="300"/></a>
            <div>
                
                <h2>{name}</h2>
                
                <p>{email}</p>
                <p>{<a href={email}>email</a>}</p>
            </div>
        </div> 
    );
}
export default Card;