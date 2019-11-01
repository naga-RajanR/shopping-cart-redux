export const userSignin=(user,isSignin)=>{
    return {
        type:"USER_SIGNIN",
        payload:{
            userObj:user,
            isSignin:isSignin
        }
    }
}

export const userSignOut=()=>{
    return{
        type:"USER_SIGNOUT"
    }
}

export const addtoCart=(data)=>{
    return{
        type:"ADD_CART",
        payload:data
    }
}

export const removeItem=(id)=>{
    return{
        type:'REMOVE_ITEM',
        payload:id
    }
}

export const addQuantity=(id)=>{
    return{
        type:"ADD_QUANTITY",
        payload:id
    }
} 

export const removeQuantity=(id)=>{
    return{
        type:"REMOVE_QUANTITY",
        payload:id
    }
} 

export const brandFilter=(arr)=>{
    return {
        type:"BRAND_FILTER",
        payload:arr
    }
}

export const showProducts=()=>{
    return{
        type:"SHOW_PRODUCTS",
    }
}

// export const unselectBrandFilter=(arr)=>{
//     return {
//         type:"UNSELECT_BRAND_FILTER",
//         payload:arr
//     }
// }