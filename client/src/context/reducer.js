const reducer = (state, action)=>{
    switch(action.type){
        case 'UPDATE_ALERT':
            return {...state, alert: action.payload}
        default:
            throw new Error('No Matched Action')
    }
};

export default reducer;
