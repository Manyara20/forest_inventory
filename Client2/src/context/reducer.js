const reducer = (state, action)=>{
    switch(action.type){
        case 'UPDATE_ALERT':
            return {...state, alert: action.payload}
        case 'UPDATE_CURRENT_USER':
            return {...state, currentUser: action.payload}
        case 'OPEN_LOADING':
            return {...state, loading: true};
        case 'CLOSE_LOADING':
            return {...state, loading: false};
        default:
            throw new Error('No Matched Action')
    }
};

export default reducer;