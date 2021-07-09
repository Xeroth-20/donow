import React, {
	useEffect,
	useRef,
	FunctionComponent,
	TextareaHTMLAttributes,
} from 'react';

const TextArea: FunctionComponent<TextareaHTMLAttributes<HTMLTextAreaElement>> =
	(props) => {
		const textarea = useRef<HTMLTextAreaElement>(null);

		const resize = () => {
			if (textarea.current) {
				textarea.current.style.height = '2px';
				textarea.current.style.height = `${textarea.current.scrollHeight}px`;
			}
		};

		useEffect(resize, []);

		return (
			<textarea
				className={props.className}
				placeholder={props.placeholder}
				value={props.value}
				ref={textarea}
				onChange={props.onChange}
				onKeyPress={resize}
				onKeyUp={resize}
			/>
		);
	};

export default TextArea;
