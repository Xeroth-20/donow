import React, { useState, useEffect, FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './../redux/actions/todos.action';
import ParentContainer from './../components/ParentContainer';
import ChildContainer from './../components/ChildContainer';
import PageHeader from './../components/PageHeader';
import UserCard from './../components/UserCard';
import TodoPreview from './../components/TodoPreview';
import Input from './../components/Input';
import Button from './../components/Button';

const HomePage: FunctionComponent = () => {
	const [newTodo, setNewTodo] = useState<ITodo | undefined>();
	const user = useSelector<Store, User>((state) => state.user) as IUser;
	const todos = useSelector<Store, ITodoPopulated[]>((state) => {
		const result = state.todos[user.username] || [];
		if (result) {
			return result.map((todo) => {
				const items = state.todoItems[todo.id] || [];
				return { ...todo, items };
			});
		}

		return result;
	});

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (newTodo) {
			history.push(`/todos/${newTodo.id}`);
		}
	}, [newTodo]);

	const handleAddTodoClick = () => {
		const todo: ITodo = {
			id: Date.now().toString(16),
			name: 'Untitled',
			creationDate: new Date(),
		};
		dispatch(addTodo({ userId: user.username, todo }));
		setNewTodo(todo);
	};

	return (
		<div className="home-page">
			<ParentContainer>
				<PageHeader />
				<ChildContainer>
					<div className="top">
						<UserCard />
					</div>
					<div className="bottom">
						<div className="filters">
							<div className="bottom-header">
								<h2 className="filters-title">Filtros</h2>
							</div>
							<div className="filter">
								<Input placeholder="Buscar por nombre" />
							</div>
						</div>
						<div className="todo-previews">
							<div className="bottom-header">
								<div className="todo-previews-header">
									<h2 className="todo-previews-title">Lista de tareas</h2>
									<Button
										type="button"
										variant={['sz-sm', 'br-lg-sz-md']}
										color="accent"
										onClick={handleAddTodoClick}
									>
										<i className="bi-plus-lg" /> Nueva lista
									</Button>
								</div>
							</div>
							{todos.map((todo) => (
								<div className="todo-preview-container" key={todo.id}>
									<TodoPreview todo={todo} />
								</div>
							))}
						</div>
					</div>
				</ChildContainer>
			</ParentContainer>
		</div>
	);
};

export default HomePage;
