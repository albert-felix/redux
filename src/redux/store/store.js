import { combineReducers, createStore } from "redux";
import visibilityFilterReducer from "../reducers/visibilityFilterReducer";
import todosReducer from "../reducers/todosReducer";

const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todosReducer 
});

const store = createStore(rootReducer);

export default store;
