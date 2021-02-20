import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = (Component: React.FC) =>
  ReactDOM.render(<Component />, document.querySelector('#root'));

render(hot(App));
