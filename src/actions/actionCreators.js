import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE, CHANGE_SERVICE_FIELD, CHANGE_EDIT_FIELD, SET_EDIT_FORM, CHANGE_EDIT_MODE, SET_SERVICE_FORM, SET_FILTER } from './actionTypes';

export function addService(name, price) {
    return { type: ADD_SERVICE, payload: { name, price } };
}
export function editService(objId, newName, newPrice) {
    return { type: EDIT_SERVICE, payload: { objId, newName, newPrice } }
}
export function removeService(id) {
    return { type: REMOVE_SERVICE, payload: { id } };
}
export function changeServiceField(name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } }
}
export function setServiceForm(object) {
    return { type: SET_SERVICE_FORM, payload: { object } }
}
export function changeEditField(name, value) {
    return { type: CHANGE_EDIT_FIELD, payload: { name, value } }
}
export function setEditForm(object) {
    return { type: SET_EDIT_FORM, payload: { object } }
}
export function changeEditMode(status) {
    return { type: CHANGE_EDIT_MODE, payload: { status } }
}
export function setFilter(filter) {
    return { type: SET_FILTER, payload: { filter } }
}

