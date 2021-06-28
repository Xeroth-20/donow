import React, {
	useState,
	useEffect,
	useContext,
	useRef,
	FormEventHandler,
	FunctionComponent,
	ChangeEventHandler,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from './../redux/actions/todos.action';
import TodoContext from './TodoContext';
import Modal from './Modal';
import Input from './Input';
import Button from './Button';

interface NewTodoNameModal {
	close?: () => void;
}

const NewTodoNameModal: FunctionComponent<NewTodoNameModal> = ({ close }) => {
	const [newTodoName, setNewTodoName] = useState<string>('');
	const todo = useContext(TodoContext) as ITodo;
	const user = useSelector<Store, IUser>((state) => state.user as IUser);
	const ref = useRef<HTMLInputElement | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, []);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		dispatch(
			updateTodo({
				userId: user.username,
				todo: {
					...todo,
					name: newTodoName,
				},
			})
		);

		if (close) {
			close();
		}
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setNewTodoName(target.value);
	};

	return (
		<Modal>
			<div className="new-todoname-modal">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<div className="ntm-title">
							Editar nombre de lista <i className="bi-pencil" />
						</div>
					</div>
					<div className="form-group">
						<Input
							ref={ref}
							placeholder={todo.name}
							value={newTodoName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<div className="form-row">
							<div className="form-col-auto">
								<Button type="button" color="flat" onClick={close}>
									Cancelar
								</Button>
							</div>
							<div className="form-col">
								<Button type="submit" color="accent" block>
									Guardar
								</Button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default NewTodoNameModal;
