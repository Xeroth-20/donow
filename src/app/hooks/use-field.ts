import { useState } from 'react';

interface InputField {
	value: string;
	error: string | null;
	dirty: boolean;
}

const useField = (
	initialValue: string,
	validator?: (value: string) => string | null
): [InputField, (newValue: string) => void] => {
	const [value, setValue] = useState<string>(initialValue);
	const [error, setError] = useState<string | null>(null);
	const [dirty, setDirty] = useState<boolean>(false);

	const dispatch = (newValue: string) => {
		setDirty(true);
		if (validator) {
			setError(validator(newValue));
		}
		setValue(newValue);
	};

	return [{ value, error, dirty }, dispatch];
};

export default useField;
