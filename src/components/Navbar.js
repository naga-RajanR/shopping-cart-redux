import React from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";
import { GoogleLogin } from 'react-google-login';

import {userSignOut,userSignin} from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  profileAvatar:{
   margin:0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display:'flex',
    alignItems:'center'
  },
}));
const MenuIems=styled.div`
display:flex;
height:100%;
width:40%;
`
const Button = styled.button`
padding:5px 10px;
margin:10px;
cursor:pointer;
outline:none;
border-radius: 10px;
font-family: cursive;
border: 1px solid transparent;
&:hover{
box-shadow: 1px 2px 5px 1px #796e6ed1; 
}
`

const Label=styled.label`
margin:0px 10px;
height:100%; 
font-family:Roboto;
padding:20px 0px;
cursor:pointer;
&:hover{
    padding-bottom:5px;
    border-bottom:1px solid;
    // display:inline-block;
    // color:red;
}
`
const Title=styled.p`
color: black;
margin: 5px;
padding-bottom: 1px solid black;
border-bottom: 1px solid;
display: inline-block;
padding: 5px;
`

function ButtonAppBar(props) {
  const classes = useStyles();
console.log("navbarProps",props)
const user=props.isSigned?props.user:null
let signInGoogle = (user) => {
  console.log("signIn")
  var userObj = user.profileObj
  localStorage.setItem('userData', JSON.stringify(userObj));
 props.userSignin(userObj,true)
}
  return (
    <div className={classes.root}>
      <AppBar style={{background:user?"#3f51b5":'#3f51b5'}} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h5" className={classes.title}>
          <Avatar alt="shop logo" 
          src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-01.png" 
          className={classes.avatar} />      
            Shopping
          </Typography>
           <MenuIems>
             {/* <Router> */}
             <Link className="link" to='/'>
               <Label>Products</Label>
               </Link>
               <Link className="link" to='/carts'>
             <Label>My Cart {props.cartLength>0?`(${props.cartLength})`:""}</Label>
             </Link>
             {/* </Router> */}
           </MenuIems>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          {user?
           <Popup trigger={<Avatar alt="profile" 
           src={user.imageUrl}
           className={classes.profileAvatar} /> } position="bottom right">       
          <div style={{display:'flex',flexDirection:'column'}}>
            <Title style={{color:'black'}}>{user.givenName}</Title>
            <Button onClick={()=>{
                  localStorage.removeItem('userData');
              props.userSignOut()}}>sign out</Button>
          </div>
          </Popup>:
           <Popup trigger={<MenuIcon/> } position="bottom right">       
          <div style={{padding:'20px 10px'}}>
          <GoogleLogin
                clientId="381179301275-sn7bmn0f1fmvr4jple7pfpq6i74fcbbc.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={signInGoogle}
                // onFailure={this.failure}
                cookiePolicy={'single_host_origin'}
              />
          </div>
          </Popup>
          }
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    user:state.user.user,
    isSigned:state.user.isSignedIn,
    cartLength:state.products.addedItems.length 
 }
}

export default connect (mapStateToProps,{userSignOut,userSignin})(ButtonAppBar)