import {createStore} from "redux";
import rootReducer from "./reducer";

let preloadState
const persistedTodoString = localStorage.getItem('todos')

if (persistedTodoString){
    preloadState = {
        todos: JSON.parse(persistedTodoString)
    }
}

const store = createStore(rootReducer, preloadState)