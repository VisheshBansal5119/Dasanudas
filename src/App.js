import React,{Component} from 'react';

import {members} from './members';
import CardList from './cardlist';
// const fs = require('fs');

// fs.readFile('./test.txt',{ encoding: 'utf-8'},(err,data)=>{
//   console.log(data);
// });
class App extends Component{
 
  render(){
    return(

      <div>
        <h1 id="Main-heading">Dasanudas</h1>
        <h2 id="sub-heading">Yuvako</h2>
        <span>Test <a href="http://127.0.0.1:5500/src/Vishesh.html">click</a></span>
        <CardList members={members}/>

      </div>
    );
  }
}
export default App;
