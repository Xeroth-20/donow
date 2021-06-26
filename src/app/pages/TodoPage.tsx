import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TodoContext from './../components/TodoContext';
import PageHeader from './../components/PageHeader';
import ParentContainer from './../components/ParentContainer';
import ChildContainer from './../components/ChildContainer';
import TodoCard from './../components/TodoCard';
import Board from './../components/Board';

const TodoPage: FunctionComponent = () => {
	const { id } = useParams<{ id: string }>();
	const user = useSelector<Store, IUser>((state) => state.user as IUser);
	const todo = useSelector<Store, ITodoPopulated | null>((state) => {
		const result = state.todos[user.username].find((td) => td.id === id);
		return result
			? { ...result, items: state.todoItems[result.id] || [] }
			: null;
	});

	return (
		<div className="todo-page">
			{todo ? (
				<TodoContext.Provider value={todo}>
					<ParentContainer>
						<PageHeader />
						<ChildContainer>
							<div className="top">
								<TodoCard />
							</div>
							<div className="bottom">
								<Board />
							</div>
						</ChildContainer>
					</ParentContainer>
				</TodoContext.Provider>
			) : (
				<span>La lista de tareas con el id {id} no existe.</span>
			)}
		</div>
	);
};

export default TodoPage;
