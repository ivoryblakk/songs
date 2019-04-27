import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // its a component
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

//rarley interact with the store .... only if doing advance this
ReactDOM.render(
 <Provider store={createStore(reducers)}> 
  <App />
</Provider>,
 
 document.querySelector('#root')
 
 );