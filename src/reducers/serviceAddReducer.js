import { CHANGE_SERVICE_FIELD, SET_SERVICE_FORM } from '../actions/actionTypes'

const initialState = {
    name: '',
    price: '',
};

export default function serviceAddReducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_SERVICE_FIELD: const { name, value } = action.payload;
            return { ...state, [name]: value };
        case SET_SERVICE_FORM: const { object } = action.payload;
            return { ...state, name: object.name, price: object.price };
        default:
            return state;
    }
}

