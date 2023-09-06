const reducer = (state, action)=>{
    switch(action.type){
        case 'UPDATE_ALERT':
            return {...state, alert: action.payload}
        case 'UPDATE_CURRENT_USER':
            return {...state, currentUser: action.payload}
        default:
            throw new Error('No Matched Action')
    }
};

export default reducer;
