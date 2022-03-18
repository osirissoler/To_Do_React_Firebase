import React from 'react';
import { Provider } from "react-redux"
import { useDispatch } from "react-redux"

import { store } from './store/store';
import { TodoScreen } from "./components/todo/TodoScreen"



export const Todo = () => {
    
    return (
        <Provider store={store}>
            <TodoScreen />
        </Provider>

    )

}