import { createContext, useContext, useEffect, useState } from "react";
import { useDebounce } from '../hooks/useDebounce';
import todosService from "../../js/services/todos.service";

const TodosContext = createContext(null);

export const useTodos = () => useContext(TodosContext);

const TodosProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [dataTodoList, setDataTodoList] = useState([]);
	const [fieldValueSearchQuery, setFieldValueSearchQuery] = useState('');

	const valueSearch = useDebounce(fieldValueSearchQuery);

	const deleteTodo = async (id) => {
		try {
			setIsLoading(true);

			await todosService.delete(id);
			setDataTodoList(dataTodoList.filter((todo) => todo.id !== id));

			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	const updateTodo = async (id, text) => {
		try {
			setIsLoading(true);

			const todoPosition = dataTodoList.findIndex((todo) => todo.id === id);
			const currentTodo = dataTodoList.find((todo) => todo.id === id);

			if (todoPosition !== -1) {
				const data = await todosService.update(id, currentTodo, text.trim());
				const updatedTodo = await data.json();

				const copyDataToDoList = dataTodoList.slice();
				copyDataToDoList[todoPosition] = updatedTodo;

				setDataTodoList(copyDataToDoList);

				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		const searchQuery = async () => {
			try {
				const data = await todosService.search(valueSearch);

				setDataTodoList(data);
			} catch (error) {
				console.log(error);
			}
		}

		searchQuery();

	}, [valueSearch]);

	const handleDeleteTodo = (id) => deleteTodo(id);
	const handleSearchQuery = ({target}) => setFieldValueSearchQuery(target.value);

	return (
		<TodosContext.Provider value={{
			updateTodo,
			dataTodoList,

			handleDeleteTodo,
			handleSearchQuery,

			fieldValueSearchQuery,

			}}>{ children }
		</TodosContext.Provider>
	)
}

export default TodosProvider;
