const initialState = 1;

const MulsDiv = (state= initialState, action) => {
    switch (action.type) {
        case "MULTIPLY": return state * 7;
        case "DIVIDE": return state / 7;
        default: return state;
    }
}

export default MulsDiv;