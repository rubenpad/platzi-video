import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
render();

if (module.hot) module.hot.accept(render, () => render());
