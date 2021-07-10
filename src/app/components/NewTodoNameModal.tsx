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
import useField from './../hooks/use-field';
import TodoContext from './TodoContext';
import Modal from './Modal';
import Input from './Input';
import Button from './Button';
import { validateTodoName } from './../functions/field-validators';

interface NewTodoNameModal {
	close?: () => void;
}

const NewTodoNameModal: FunctionComponent<NewTodoNameModal> = ({ close }) => {
	const [todonameField, setTodonameField] = useField('', validateTodoName);
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
		if (todonameField.error === null) {
			dispatch(
				updateTodo({
					userId: user.id,
					todo: {
						...todo,
						name: todonameField.value,
					},
				})
			);

			if (close) {
				close();
			}
		}
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setTodonameField(target.value);
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
							value={todonameField.value}
							onChange={handleChange}
						/>
						{todonameField.error && todonameField.dirty && (
							<small className="hint-error">{todonameField.error}</small>
						)}
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
