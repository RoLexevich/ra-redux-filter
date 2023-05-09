import { SET_FILTER } from '../actions/actionTypes'

const initialState = {
    filter: ""
};

export default function serviceListReducer(state = initialState, action) {

    switch (action.type) {
        case SET_FILTER:
            const { filter } = action.payload;
            return { ...state, filter: filter };
        default: return state;
    }
}

