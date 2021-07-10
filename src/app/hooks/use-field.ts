import { useState } from 'react';

interface InputField {
	value: string;
	error: string | null;
	dirty: boolean;
}

interface UseFieldHook {
	(initialValue: string, validator?: (value: string) => string | null): [
		InputField,
		(newValue: string) => void,
		(dirty: boolean) => void
	];
}

const useField: UseFieldHook = (initialValue, validator?) => {
	const [value, setValue] = useState<string>(initialValue);
	const [error, setError] = useState<string | null>(
		validator ? validator(initialValue) : null
	);
	const [dirty, setDirty] = useState<boolean>(false);

	const setNewValue = (newValue: string) => {
		setDirty(true);
		if (validator) {
			setError(validator(newValue));
		}
		setValue(newValue);
	};

	return [{ value, error, dirty }, setNewValue, setDirty];
};

export default useField;
