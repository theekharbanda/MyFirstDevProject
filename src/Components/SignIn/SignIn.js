import React from 'react';

class SignIn extends React.Component {

   constructor(props){
      super(props);
      this.state={
         signInEmail :'',
         signInPassword:''
      }
   }
   onEmailChange=(event)=>{
      this.setState({signInEmail : event.target.value});
   

   }

   onPasswordChange =(event)=>{
      this.setState({signInPassword : event.target.value});

   }

   onSubmitSignIn =()=>{
      this.state.signInEmail || this.state.signInPassword 
      ? fetch('mighty-waters-90802.herokuapp.com/signin',{
           method: 'post',
           headers : {'Content-type': 'application/json'},
           body : JSON.stringify({
              email: this.state.signInEmail,
              password: this.state.signInPassword
           })
         })
        .then(response =>response.json())
        .then (user =>{
           if(user.id){
            this.props.loadUser(user);  
            this.props.onRouteChange("home");
           }
         })
      : alert ("Please fill all the required fields")   
   }
   render()
   {
      return(
         <div className ="br3  ba mv4 w-100 w-50-m w-25-l mw6  shadow-5 center">
           <main class="pa4 black-80 ">
              <div className="measure ">
                 <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw5 ph0 mh0 center">Sign In</legend>
                    <div className="mt3">
                       <label className="db fw6 lh-copy f6 center" htmlFor="email-address">Email</label>
                       <input className="pa2 input-reset ba b--black bg-transparent hover-bg-grey hover-black w-100" 
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
                    value="Sign in"
                    onClick ={this.onSubmitSignIn}
                    />
                 </div>
                 <div className="lh-copy mt3">
                   <p
                   onClick ={()=>this.props.onRouteChange('register')}  
                   className="f6 link dim black db center pointer">Register</p>
                 </div>
              </div>
           </main>
         </div>
     );
   }

}


export default SignIn ;