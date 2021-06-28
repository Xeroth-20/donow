import React, {
	forwardRef,
	ForwardRefRenderFunction,
	ChangeEventHandler,
} from 'react';

interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	value?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement | null, InputProps> = (
	{ onChange, placeholder, value },
	ref
) => {
	return (
		<input
			ref={ref}
			className="input"
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default forwardRef<HTMLInputElement | null, InputProps>(Input);
