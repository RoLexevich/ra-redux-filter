import { useSelector, useDispatch } from 'react-redux';
import { changeEditField, editService, changeEditMode } from '../actions/actionCreators';

function ServiceEdit(props) {
    const item = useSelector(state => state.serviceEdit);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeEditField(name, value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(editService(item.id, item.name, item.price));
        dispatch(changeEditMode(false));
    }

    const handleCancel = evt => {
        dispatch(changeEditMode(false));
    }

    return (
        <><h5>Форма редактирования:</h5>
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price} />
            <button type='submit'>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
        </>
    )
}

export default ServiceEdit;