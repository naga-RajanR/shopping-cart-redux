const initialState={
    user:{},
    isSignedIn:false
}

const signIn=(state=initialState,action)=>{
   switch(action.type){
       case "USER_SIGNIN":
           console.log("firt sign in")
       return{
           ...state,
           user:action.payload.userObj,
           isSignedIn:action.payload.isSignin
       }
       case "USER_SIGNOUT":
       return{
           ...state,
           user:{},
           isSignedIn:false
       }
       default:
       return state;    
   }   
}

export default signIn