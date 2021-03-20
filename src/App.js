import React,{Component} from 'react';
import {members} from './members';
import CardList from './cardlist';
import Signin from './Signin/Signin';
import './App.css';
import './index.css';
import Nav from './NavigationBar';
import Register from './Register';
class App extends Component{
 constructor(){
   super(

   );
   this.state = {
     route: 'signin',
     isSignedIn: true
   }
 }
onRouteChange =(route) =>{
  this.setState({route: route});
  if(route === 'signin'){
    this.setState({isSignedIn: false})
  }
  else if(route === 'home'){
    this.setState({isSignedIn: true})
  }
 
}

  render(){
    return(

      <div>
        
        
        <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        <h1 id="Main-heading">Dasanudas</h1>
        { this.state.route === 'home' 
          ?<div>
           <h2 id="sub-heading">Yuvako</h2>
            <div id="strip">
            
            <span > 
            <marquee style={{color : 'white', fontSize: '25px'}} width="100%" direction="left" height="100px">
            Always forgive your enemies; nothing annoys them so much.
            </marquee>
            </span>
            </div>
            
            <CardList members={members}/>
            <span id="credit">Created by Vishesh Bansal</span>
            </div>
         
        :(
          this.state.route === "signin"
          ?<Signin onRouteChange={this.onRouteChange} />
          :<Register onRouteChange={this.onRouteChange} />
        )
        }
      </div>
    );
  }
}
export default App;
