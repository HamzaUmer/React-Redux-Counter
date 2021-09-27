import UpDown from "./IncDec";
import MulsDiv from "./MulDiv";

import { combineReducers } from "redux";

const mainReducer = combineReducers ({
    UpDown,
    MulsDiv
});

export default mainReducer;