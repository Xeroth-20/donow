import React, { StrictMode, FunctionComponent } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import routes from './routes';

const App: FunctionComponent = () => {
	return (
		<StrictMode>
			<Provider store={store()}>
				<div className="app">
					<BrowserRouter>
						<Switch>{routes}</Switch>
					</BrowserRouter>
				</div>
			</Provider>
		</StrictMode>
	);
};

export default App;
