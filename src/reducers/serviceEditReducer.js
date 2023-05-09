import { CHANGE_EDIT_FIELD, SET_EDIT_FORM, CHANGE_EDIT_MODE } from '../actions/actionTypes'

const initialState = {
    id: '',
    name: '',
    price: '',
    editMode: false
};

export default function serviceEditReducer(state = initialState, action) {

    switch (action.type) {
        case SET_EDIT_FORM: const { object } = action.payload;
            return { ...state, id: object.id, name: object.name, price: object.price };
        case CHANGE_EDIT_FIELD: const { name, value } = action.payload;
            return { ...state, [name]: value };
        case CHANGE_EDIT_MODE: const { status } = action.payload;
            if (status === undefined) return { ...state, editMode: !state.editMode };
            else return { ...state, editMode: status };
        default:
            return state;
    }
}