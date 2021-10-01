import React from 'react';


class Register extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      name: '',
      Email:'',
      Password:'',
    }
  }
  
  onNameChange =(event)=>{
    this.setState({name : event.target.value})
  
  }

  onEmailChange =(event)=>{
    this.setState({Email : event.target.value});
  }
 
  onPasswordChange =(event)=>{
    this.setState({Password : event.target.value});
  }
  onSubmitSignIn =()=>{
    this.state.name !=='' && this.state.Email !=='' && this.state.Password!=='' ?
    fetch('https://mighty-waters-90802.herokuapp.com/register',{
       method: 'post',
       headers : {'Content-type': 'application/json'},
       body : JSON.stringify({
          name: this.state.name,
          email: this.state.Email,
          password: this.state.Password,
          
       })
    })
      .then(response =>response.json())
      .then (user =>{
         if(user.id){
           console.log(user.id);
          this.props.loadUser(user);
          this.props.onRouteChange('home');
         }
         else{
           console.log("error");
         }
      })
      :alert("Please fill all the required fields");
 }

  render(){
    
    return(
      <div className ="br3  ba mv4 w-100 w-50-m w-25-l mw6  shadow-5 center">
      <main class="pa4 black-80 ">
         <div className="measure ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f3 fw5 ph0 mh0 center">Register</legend>
                 <div className="mt3">
                    <label className="db fw6 lh-copy f6 center" htmlFor="name">Name</label>
                    <input 
                     className="pa2 input-reset ba b--black bg-transparent hover-bg-grey hover-black w-100" 
                     type="name" 
                     name="name"  
                     id="name"
                     onChange ={this.onNameChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6 center" htmlFor="Email">E-mail</label>
                    <input 
                     className="pa2 input-reset ba b--black bg-transparent hover-bg-grey hover-black w-100" 
                     type="email" 
                     name="email-address"  
                     id="email-address"
                     onChange = {this.onEmailChange}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6 center" htmlFor="password">Password</label>
                    <input 
                     className="pa2  input-reset ba b--black bg-transparent hover-bg-grey hover-black w-100" 
                     type="password" 
                     name="password"  
                     id="password"
                     onChange ={this.onPasswordChange}

                    />
                  </div>
              </fieldset>
              <div class="">
                 <input 
                 className="b ph3 pv2 input-reset ba b--black center bg-transparent grow pointer f6 dib" 
                 type="submit" 
                 value="Sign up"
                 onClick ={this.onSubmitSignIn}
                 />
              </div>
          </div>
      </main>
      </div>
   );

  }
    
}
export default Register;