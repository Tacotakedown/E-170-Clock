import React from 'react';
import ReactDOM from 'react-dom/client';

export const Render = (component: React.ReactElement) => {
	const root = ReactDOM.createRoot(
		document.getElementById('root') as HTMLElement
	);
	root.render(component);
};
