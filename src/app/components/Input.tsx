import React, { FunctionComponent, ChangeEventHandler } from 'react';

interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	value?: string;
}

const Input: FunctionComponent<InputProps> = ({
	onChange,
	placeholder,
	value,
}) => {
	return (
		<input
			className="input"
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
