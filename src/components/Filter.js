import { useDispatch } from 'react-redux';
import { setFilter } from '../actions/actionCreators';
import debounce from '../functions/debounce';

function Filter(props) {
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { value } = evt.target;
        debouncedApplyFilter(value);
    }

    const applyFilter = filter => {
        dispatch(setFilter(filter));
    }

    const debouncedApplyFilter = debounce(applyFilter, 500);

    return (
        <div className="filter-wrapper">
            <h5 className="filter-lable">Фильтр:</h5>
            <input name='search' onChange={handleChange} />
        </div>
    )
}

export default Filter;