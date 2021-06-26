import React, { FunctionComponent, PropsWithChildren } from 'react';

const ParentContainer: FunctionComponent<PropsWithChildren<{}>> = ({
	children,
}) => {
	return <div className="parent-container">{children}</div>;
};

export default ParentContainer;
