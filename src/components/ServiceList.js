import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, setEditForm, changeEditMode } from '../actions/actionCreators';

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const filterApplyed = useSelector(state => state.filter.filter).trim();
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeService(id));
    }

    const handleEdit = o => {
        dispatch(changeEditMode(true));
        dispatch(setEditForm(o));
    }

    return (
        <ul>
            {items.filter(o => o.name.includes(filterApplyed)).map(o => <li key={o.id}>
                {o.name} {o.price}
                <button onClick={() => handleEdit(o)}>&#9998;</button>
                <button onClick={() => handleRemove(o.id)}>&#10006;</button>
            </li>)}
        </ul>
    )

}

export default ServiceList;

