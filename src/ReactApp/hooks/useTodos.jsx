import { createContext, useContext, useEffect, useState } from "react";
import { useDebounce } from '../hooks/useDebounce';
import todosService from "../../js/services/todos.service";

const TodosContext = createContext(null);

export const useTodos = () => useContext(TodosContext);

const TodosProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [dataTodoList, setDataTodoList] = useState([]);

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

	const handleDeleteTodo = (id) => deleteTodo(id);

	return (
		<TodosContext.Provider value={{
			isLoading,
			updateTodo,
			dataTodoList,
			handleDeleteTodo,
			}}>{ children }
		</TodosContext.Provider>
	)
}

export default TodosProvider;
