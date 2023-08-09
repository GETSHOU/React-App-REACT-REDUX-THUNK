import { createContext, useContext, useState } from "react";
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

	const handleDeleteTodo = (id) => deleteTodo(id);

	return (
		<TodosContext.Provider value={{
			isLoading,
			dataTodoList,
			handleDeleteTodo,
			}}>{ children }
		</TodosContext.Provider>
	)
}

export default TodosProvider;
