const initialState={
    user:{},
    isSignedIn:false,
    signInError:null,
    signOutError:null
}

const signIn=(state=initialState,action)=>{
   switch(action.type){
       case "USER_SIGNIN_SUCCESS":
       return{
           ...state,
           user:action.payload,
           isSignedIn:true
       }
       case "USER_SIGNIN_ERROR":
        return{
            ...state,
            user:{},
            isSignedIn:false,
            signInError:action.payload
        }
       case "USER_SIGNOUT_SUCCESS":
       return{
           ...state,
           user:{},
           isSignedIn:false
       }
       case "USER_SIGNOUT_ERROR":
        return{
            ...state,
            isSignedIn:true,
            signOutError:action.payload
        }
       default:
       return state;    
   }   
}

export default signIn