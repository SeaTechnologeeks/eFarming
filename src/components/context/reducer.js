export const actionType = {
    SET_USER: 'SET_USER',
};

const reducer = (state,action) => {
    console.log(action)
    switch(action.type) {
        case actionType.SET_USER:
        return {
            ...state,
            user: action.user,
    };
    case actionType.SET_FARM_ITEM:
        return {
            ...state,
            farmItem: action.farmItems,
    };
    default:
        return state;
        
    }
};
export default reducer;