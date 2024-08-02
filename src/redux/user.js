const initState= {
    user: {
        email:'이메일주소'
    }
}

export const userAction= (email)=> { return {type:'setUser', email:email}}

export default function userReducer(state= initState, action){
    switch(action.type){
        case 'setUser' :
            return { ...state, user: {...state.user, email:action.email}}
        
        default:
            return state
    }
}
