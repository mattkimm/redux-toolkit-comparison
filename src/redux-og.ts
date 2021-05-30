import uuid from "uuid";
import { Todo } from "./type";

// constants
const CREATE_TODO = 'CREATE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SELECT_TODO = 'SELECT_TODO';

// Actions & Action Type
interface CreateTodoActionType {
    type : typeof CREATE_TODO;
    payload  : Todo
}

export const createTodoActionCreator = (data : { desc : string}) : CreateTodoActionType => {
    const { desc } = data;
    return {
        type : CREATE_TODO,
        payload : {
            id : uuid(),
            desc,
            isComplete : false
        }
    };
};

interface EditTodoActionType {
    type : typeof EDIT_TODO;
    payload : { id : string, desc : string}
}

export const editTodoActionCreator = (data : {  id : string, desc : string}) : EditTodoActionType => {
    const { id, desc} = data;
    return {
        type : EDIT_TODO,
        payload : {
            id,
            desc,
        }
    }
}

interface ToggleTodoActionType {
    type : typeof TOGGLE_TODO;
    payload : { id : string; isComplete : boolean};
}

export const toggleTodoActionCreator = ({
    id, isComplete
} : {id : string, isComplete : boolean}) : ToggleTodoActionType => {
    return {
        type : TOGGLE_TODO,
        payload : {
            id,
            isComplete,
        }
    }
}

interface DeleteTodoActionType {
    type : typeof DELETE_TODO;
    payload : { id : string }
}
export const deleteTodoActionCreator = ({id} : { id : string}) : DeleteTodoActionType => {
    return {
        type : DELETE_TODO,
        payload : {
            id
        }
    }
}


interface SelectTodoActionType {
    type : typeof SELECT_TODO;
    payload : {id : string}
}

export const selectTodoActionCreator = ({id} : { id : string}) : SelectTodoActionType => {
    return {
        type : SELECT_TODO,
        payload : {id}
    }
}