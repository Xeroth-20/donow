import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(
	reducers,
	typeof window !== 'undefined' &&
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f
);
