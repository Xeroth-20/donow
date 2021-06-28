import React, {
	useEffect,
	useRef,
	FunctionComponent,
	PropsWithChildren,
} from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	if (!ref.current) {
		ref.current = document.createElement('div');
	}

	useEffect(() => {
		if (modalRoot) {
			modalRoot.appendChild(ref.current as Node);
			return () => {
				modalRoot.removeChild(ref.current as Node);
			};
		}
	}, []);

	return createPortal(<div className="modal">{children}</div>, ref.current);
};

export default Modal;
