import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import styled from 'styled-components'
import Modal from 'react-responsive-modal';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { userSigninError, userSigninSuccess } from '../actions';

const LoginWrapper=styled.div`
position:relative;
`
const ButtonsWrapper=styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
`
const Button=styled.button`
width:100%;
cursor:pointer;
display:flex;
align-items:center;
// justify-content:space-between;
outline:none;
border: 1px solid;
// background: darkslateblue;
color: white;
border-radius: 10px;
padding: 6px 15px;
margin: 5px 0px;
`
const Icon=styled.i`
margin:0px 10px;
font-size:30px;
`
const Image=styled.img`
width:40px;
height:40px;
border-radius:50%;
`
const LogoutWrapper=styled.div`
position:absolute;
`
export class socialLogin extends Component {

    constructor(props) {
        super(props);
        this.state={
            open:false
        }
        this.googleSignIn = this.googleSignIn.bind(this);
    }
    onOpenModal=()=>{
        this.setState({
            open:true
        })
    }
    onCloseModal=()=>{
        this.setState({
            open:false
        })
    }
    openLogout=()=>{
        this.setState({
            logOut:!this.state.logout
        })
    }
    googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(({ user }) => {
            var profileInfo = { name: user.displayName, email: user.email, pic: user.photoURL }
            this.props.userSigninSuccess(profileInfo)
        }).catch((error) => {
            this.props.userSigninError(error)
        });
    }
    fbSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user;
            this.props.userSigninSuccess(user)
        }).catch((error) => {
            this.props.userSigninError(error)
        });
    }
    render() {
        const {user,isSignedIn}=this.props
        return (<LoginWrapper>
            {isSignedIn?<Image onClick={this.openLogout} src={user.pic}/>:
            <Icon onClick={this.onOpenModal} className="fa fa-user"></Icon>}
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
            <h3>Login</h3>
            <ButtonsWrapper>
                <Button onClick={this.fbSignIn}
                    style={{ background: ' #3b5998' }}>
                    <Icon className="fa fa-facebook-square">
                    </Icon> Continue with Facebook</Button>
                <Button onClick={this.googleSignIn}
                    style={{ background: ' #ea4335' }}>
                    <Icon className="fa fa-google"></Icon> Continue with Google</Button>
            </ButtonsWrapper>
            </Modal>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = (state) => {
return{
    user:state.user.user,
    isSignedIn:state.user.isSignedIn
}
}

export default connect(mapStateToProps, { userSigninSuccess, userSigninError })(socialLogin)
