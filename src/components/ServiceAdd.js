import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, setServiceForm } from '../actions/actionCreators';

function ServiceAdd(props) {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeServiceField(name, value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(addService(item.name, item.price));
        dispatch(setServiceForm({ name: '', price: '' }));
    }

    return (
        <>
        <h5>Форма добавления:</h5>
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price} />
            <button type='submit'>Save</button>
        </form>
        </>
    )
}

export default ServiceAdd;