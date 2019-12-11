import React,{Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import firebase from 'firebase'

import {userSigninSuccess} from './actions'
import './globalstyle.css'
import Navbar from './components/Navbar'
import ProductDetail from './components/productDetails'

import CartItems from './components/cart'
import Products from './components/products'
import HomePage from './components/home';

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
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
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
           <Route exact path="/" component={HomePage}/>
          <Route exact path="/products" component={Products}/>
          <Route path="/carts" component={CartItems}/>
          <Route exact path="/products/:productId" component={ProductDetail}/>
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
