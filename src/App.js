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
