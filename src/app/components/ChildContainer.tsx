import React, { FunctionComponent, PropsWithChildren } from 'react';

const ChildContainer: FunctionComponent<PropsWithChildren<{}>> = ({
	children,
}) => {
	return <div className="child-container">{children}</div>;
};

export default ChildContainer;
