import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
// import { userSignOut, userSignin } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import SocialLogin from './socialLogin'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  avatar: {
    margin: 10,
  },
  profileAvatar: {
    margin: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
}));
// const MenuIems = styled.div`
// display:flex;
// height:100%;
// width:40%;
// @media (max-width: 768px) {
//   display: ${(props) => props.show ? "inline-block" : "none"};
//   width:100%;
// }
// `
// const LogoWrapper = styled.div`
// @media (max-width: 768px) {
//   display: ${(props) => props.show ? "none" : "block"};
//   width:100%;
// }
// `
const MobileMenuItems = styled.div`
// position:absolute;
// display:none;
// @media (max-width: 768px) {
//   display:block;
// }
position: absolute;
    /* bottom: -100%; */
    color: white;
    background:#3f51b5e8;
    width: 100%;
    right: 0;
    bottom:-87px;
    text-align: center;
`
const Label = styled.label`
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

function ButtonAppBar(props) {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
const  handleScroll = () => {
  const scrollHeight=window.pageYOffset
  setHeight(scrollHeight)
  };
  console.log('height',height)
  const classes = useStyles();
  const user = props.isSigned ? props.user : null
  const MenuIems = styled.div`
  display:flex;
  height:100%;
  width:40%;
  padding:20px 0px;
  @media (max-width: 768px) {
    display:${props.show ? 'block' : 'none'}
    width:100%;
  }
  `
  const LogoWrapper = styled.div`
  width:40%;
  @media (max-width: 768px) {
    display:${props.show ? 'none' : 'block'}
    width:100%;
  }
  `

  return (
    <div className={classes.root}>
      <AppBar style={{ background: user ? "#3f51b5" : '#3f51b5' }} position="static">
        <Toolbar>
          <div className="nav-btn">
            <div className={props.show?'is-active':'hamburger'} id="hamburger-1"
            onClick={props.showNavbarItems}  for="nav-check">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
         
          <LogoWrapper>
          <Link className="link" to='/'>
            <Typography variant="h5" className={classes.title}>
              <Avatar alt="shop logo"
                src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-01.png"
                className={classes.avatar} />
              Shopping
          </Typography>
          </Link>
          </LogoWrapper>
          <MenuIems >
            <Link className="link" to='/products'>
              <Label>Products</Label>
            </Link>
            <Link className="link" to='/carts'>
              <Label>My Cart {props.cartLength > 0 ? `(${props.cartLength})` : ""}</Label>
            </Link>
          </MenuIems>
          <SocialLogin/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isSigned: state.user.isSignedIn,
    cartLength: state.products.addedItems.length
  }
}

export default connect(mapStateToProps)(ButtonAppBar)