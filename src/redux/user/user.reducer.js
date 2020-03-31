//REDUX does not know the initial state when the app fires up so we create an initial state
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { //if stat is not defined then we set it be our initial state above
    switch (action.type) {
        case 'SET_CURRENT_USER':
            console.log("hhhhhhhhhhhhhhhh im herere", action.payload)
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer