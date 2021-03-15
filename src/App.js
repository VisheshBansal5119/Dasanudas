import React,{Component} from 'react';
import Nav from "./NavigationBar";
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
        <Nav/>
        <h1 id="Main-heading">Dasanudas</h1>
        <h2 id="sub-heading">Yuvako</h2>
        <CardList members={members}/>
        <span id="credit">Created by Vishesh Bansal</span>
        {
          localStorage.setItem("name","Vishesh")
          
        }
      </div>
    );
  }
}
export default App;
