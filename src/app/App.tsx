import React, { StrictMode, FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import routes from './routes';

const App: FunctionComponent = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<Router>
					<div className="app">
						<Switch>{routes}</Switch>
					</div>
				</Router>
			</Provider>
		</StrictMode>
	);
};

export default App;
