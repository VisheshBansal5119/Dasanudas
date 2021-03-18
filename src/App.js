import React,{Component} from 'react';
import {members} from './members';
import CardList from './cardlist';
import Signin from './Signin/Signin';
import './App.css';

class App extends Component{
 constructor(){
   super(

   );
   this.state = {
     route: 'signin',
     vatsal: 'false',
     vishesh: 'false'
   }
 }
onRouteChange =() =>{
  this.setState({route: 'home'});
}

  render(){
    return(

      <div>
        
        <div id="colorstrip"/>
        <h1 id="Main-heading">Dasanudas</h1>
        { this.state.route === 'signin' ? <Signin onRouteChange={this.onRouteChange}/>
        :<div>
       
        <h2 id="sub-heading">Yuvako</h2>
        <div id="strip">
         <span > <marquee style={{fontSize: '25px' ,padding: '5'  , color: 'white'}}>The journey of a thousand miles begins with one step.</marquee>
         </span>
        </div>
        <CardList members={members}/>
        <span id="credit">Created by Vishesh Bansal</span>
        </div>
  }
      </div>
    );
  }
}
export default App;
