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
        <div id="colorstrip"/>
        <h1 id="Main-heading">Dasanudas</h1>
        <div id="strip">
         <span> <marquee style={{fontSize: '25px' ,padding: '5'  , color: 'white'}}>The journey of a thousand miles begins with one step.</marquee>
         </span>
        </div>
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
