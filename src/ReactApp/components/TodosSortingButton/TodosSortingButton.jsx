import { useDispatch } from 'react-redux';
import * as action from '../../../js/actions/index';
import styles from './TodosSortingButton.module.css';

export const TodosSortingButton = () => {
	const dispatch = useDispatch();

	const handleSortingTodos = (sortingType) => dispatch(action.sortingTodos(sortingType));

	return (
		<button className={styles.sortButton} onClick={() => handleSortingTodos('text')}>Sort by a-z</button>
	)
}
