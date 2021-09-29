import React  from 'react';
import Navigation from './Components/Navigation/Navigation';
import './App.css';
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register.js';


const IntialState ={
  input :'',
  route : 'signin',
  user:{
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
  }
}

class  App extends React.Component {
  constructor (){
    super();
    this.state = IntialState;
  }

  loadUser=(data)=>{
    this.setState({user : {
      id : data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined : data.joined
    }});
  }


  onInputChange=(event)=>{
     console.log(event.target.value);
  }

  onButtonSubmit=()=>{
    console.log('click');
  }

  onRouteChange=(route)=>{
    if(route==='signin'){
      this.setState(IntialState);
    }
    this.setState({route: route});
  }

  render(){
      return (
        <div >        
            {this.state.route === 'home'
              ? <div>                
                  <Navigation onRouteChange={this.onRouteChange}/>
                  <Logo />
                  <h1 className ="">Hey! {this.state.user.name} </h1>
                  <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>  
                </div> 
              :
                (
                  this.state.route ==='signin'

                  ? <SignIn loadUser ={this.loadUser} onRouteChange = {this.onRouteChange}/>
                  : <Register loadUser ={this.loadUser} onRouteChange= {this.onRouteChange}/>
                )
            }
        </div>
     );
  }
}

export default App;
