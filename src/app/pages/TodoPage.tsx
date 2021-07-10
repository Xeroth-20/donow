import React, { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './../redux/actions/todos.action';
import TodoContext from './../components/TodoContext';
import PageHeader from './../components/PageHeader';
import ParentContainer from './../components/ParentContainer';
import ChildContainer from './../components/ChildContainer';
import TodoCard from './../components/TodoCard';
import Board from './../components/Board';
import Button from './../components/Button';

const TodoPage: FunctionComponent = () => {
	const { id } = useParams<{ id: string }>();
	const user = useSelector<Store, IUser>((state) => state.user as IUser);
	const todo = useSelector<Store, ITodoPopulated | null>((state) => {
		const userTodos = state.todos[user.id] || [];
		const result = userTodos.find((td) => td.id === id);

		return result
			? { ...result, items: state.todoItems[result.id] || [] }
			: null;
	});
	const dispatch = useDispatch();

	const handleRemoveTodoClick = () => {
		if (confirm('¿Estás seguro que deseas eliminar está lista?')) {
			dispatch(removeTodo({ userId: user.id, todoId: todo!.id }));
		}
	};

	return (
		<div className="todo-page fade-in">
			{todo ? (
				<TodoContext.Provider value={todo}>
					<ParentContainer>
						<PageHeader />
						<ChildContainer>
							<div className="top">
								<TodoCard />
							</div>
							<div className="bottom">
								<div className="board-container">
									<Board />
								</div>
								<div className="todo-page-actions">
									<Button
										type="button"
										variant={['sz-sm', 'br-lg-sz-md']}
										color="flat"
										onClick={handleRemoveTodoClick}
									>
										<i className="bi-trash" /> Eliminar lista
									</Button>
								</div>
							</div>
						</ChildContainer>
					</ParentContainer>
				</TodoContext.Provider>
			) : (
				<div className="error">
					<ParentContainer>
						<div className="message">
							La lista de tareas con el id {id} no existe.{' '}
						</div>
						<Link to="/">
							<Button type="button" variant="sz-sm" color="accent">
								Volver al inicio
							</Button>
						</Link>
					</ParentContainer>
				</div>
			)}
		</div>
	);
};

export default TodoPage;
