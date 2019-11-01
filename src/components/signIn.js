import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'

import Particle from './particle'
import {userSignin} from '../actions/'

// import styled from 'styled-components'

class SignInUser extends Component {
  signInGoogle = (user) => {
    var userObj = user.profileObj
    localStorage.setItem('userData', JSON.stringify(userObj));
   this.props.userSignin(userObj,true)
  }

  failure = (response) => {
    console.log("loginFailure", response)
  }
  render() {
     
    return (
      <div className="SigninContainer">
        <Particle />
        <header className="signin-component">
          <h2>SignUp to continue</h2>
            <div>
              <GoogleLogin
                clientId="381179301275-sn7bmn0f1fmvr4jple7pfpq6i74fcbbc.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.signInGoogle}
                onFailure={this.failure}
                cookiePolicy={'single_host_origin'}
              />
            </div>
        </header>

      </div>
    );
  }
}
// const mapStateToProps=(state)=>{
//     return {
//        user:state.user.user,
//        isSigned:state.user.isSignedIn 
//     }
// }
export default connect (null,{userSignin})(SignInUser);

// export default connect(null,{newSong})(newSongDetails);
