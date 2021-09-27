const initialState = 0;

const UpDown = (state= initialState, action) => {
    switch (action.type) {
        case "UP": return state + action.payload;
        case "DOWN": return state - action.payload;
        default: return state;
    }
}

export default UpDown;