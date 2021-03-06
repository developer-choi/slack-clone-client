import { combineReducers, createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {room} from './room';

const rootReducer = combineReducers({room});
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
