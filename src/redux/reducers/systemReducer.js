import { OPEN_LANDING_PAGE, SELECT_TOOL } from "../constants/actions";
import defaultStoreValues from "../constants/defaultStoreValues";

const systemReducer = (state = defaultStoreValues, action) =>{
    switch (action.type) {
        case OPEN_LANDING_PAGE:
        return { ...state }
        case SELECT_TOOL:
         return { ...state, openToolIdx: action.value }
        default:
          return state;
      }
    }
     
    export default systemReducer;