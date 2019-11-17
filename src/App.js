import React,{Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import firebase from 'firebase'

import {userSigninSuccess} from './actions'
import './globalstyle.css'
import Navbar from './components/Navbar'
// import SignIn from './components/signIn'
import CartItems from './components/cart'
import Products from './components/products'

firebase.initializeApp({
  apiKey: "AIzaSyChjnm40LGTSOyKuwGLBNfBYpFTNGJyEzE",
    authDomain: "shopping-cart-9ead9.firebaseapp.com"
})
class App extends Component {
  state={
    showMenu:false
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user!==null){
        var profileInfo={name:user.displayName,email:user.email,pic:user.photoURL}
        this.props.userSigninSuccess(profileInfo)
      }
    })
  }
  showMenu=()=>{
    this.setState({
      showMenu:!this.state.showMenu
    })
  }
  render(){
  return (<Router>
    <div className="App">
       <Navbar showNavbarItems={this.showMenu} show={this.state.showMenu}/>
       <Switch>
          <Route exact path="/" component={Products}/>
          <Route path="/carts" component={CartItems}/>
       </Switch>
    </div>
    </Router>
  )
  }
}
const mapStateToProps=(state)=>{
  return {
    user:state.user.user,
    isSigned:state.user.isSignedIn 
 }
}
export default connect(mapStateToProps,{userSigninSuccess})( App);
