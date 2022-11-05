import {applyMiddleware, createStore, Store} from "redux";
import { createWrapper, Context } from 'next-redux-wrapper';
import thunk from "redux-thunk";
import {reducer, RootState} from "./reducers";
const store = (context:Context) => createStore(reducer, applyMiddleware(thunk));
export const wrapper = createWrapper<Store<RootState>>(store, {debug:false});