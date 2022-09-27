export const actionType = {
    SET_USER: 'SET_USER',
    SET_FARM_ITEM: 'SET_FARM_ITEM',
};

const reducer = (state,action) => {
   
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