import React,{Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import {userSignin} from './actions'
import './globalstyle.css'
import Navbar from './components/Navbar'
import SignIn from './components/signIn'
import CartItems from './components/cart'
import Products from './components/products'
class App extends Component {
  state={
    showMenu:false
  }
  componentDidMount() {
    var userObj = localStorage.getItem('userData');
    var user = userObj?JSON.parse(userObj):{}
   var isUser= Object.keys(user).length
   if(isUser!==0){
     this.props.userSignin(user,true)
   }
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
          <Route path="/login" component={SignIn}/>
          <Route path="/carts" component={CartItems}/>
       </Switch>
      {/* {!this.props.isSigned?<SignIn/>:""
      }
      <Navbar/>
      <Products/> */}
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
export default connect(mapStateToProps,{userSignin})( App);
