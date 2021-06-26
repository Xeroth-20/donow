import React, { FunctionComponent } from 'react';

const withGuard = (
	Component: FunctionComponent,
	Guard: FunctionComponent
): FunctionComponent => {
	return () => (
		<Guard>
			<Component />
		</Guard>
	);
};

export default withGuard;
