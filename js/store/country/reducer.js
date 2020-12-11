import { GET_COUNTRIES } from './action.js';
import initialState from './state.js';


const countryReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COUNTRIES:
            console.log(action.payload)
            return { ...state, countries: action.payload };
        default:
            return state;
    }

}



export default countryReducer