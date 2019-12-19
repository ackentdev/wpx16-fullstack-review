import { createStore, applyMiddleware } from "redux";
import reduxMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(reduxMiddleware));