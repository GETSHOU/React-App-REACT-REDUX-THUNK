import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import * as selector from '../../../../js/selectors/index';
import * as action from '../../../../js/actions/index';
import styles from './TodoSearch.module.css';

export const TodoSearch = () => {
	const fieldValue = useSelector(selector.valueSearchQueryState);

	const dispatch = useDispatch();

	const valueSearch = useDebounce(fieldValue);

	useEffect(() => {
		dispatch(action.searchQuery(valueSearch));
	}, [dispatch, valueSearch]);

	const handleSearchQuery = (valueSearchQuery) => dispatch(action.setValueSearchQuery(valueSearchQuery));

	return (
		<input
			type="text"
			className={`${styles.field} ${styles.fieldSearch}`}
			placeholder='Search...'
			value={fieldValue}
			onChange={({target}) => handleSearchQuery(target.value)}
		/>
	)
}
