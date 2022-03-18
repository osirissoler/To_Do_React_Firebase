import { type } from '@testing-library/user-event/dist/type';
import moment from 'moment';
import { types } from '../types/types';



const initialState = {
    contents: [],
    active: null
}

export const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.eventAddList:
            return {
                ...state,
                contents: [action.payload, ...state.contents]
            }
        case types.eventActiveList:
            return {
                ...state,
                active: action.payload
            }
        case types.eventSetList:
            return {
                ...state,
                contents: [...action.payload]
            }
        case types.eventDeleteList:
            return {
                ...state,
                active: null,
                contents: state.contents.filter(list => list.id !== action.payload)
            }

        case types.eventUpdateList:
            return {
                ...state,
                contents: state.contents.map(list => list.id === action.payload.id
                    ? action.payload.list
                    : list
                )
            }


        default:
            return state;

    }

}