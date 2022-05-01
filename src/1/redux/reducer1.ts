
export interface IListItem {
	text : string | null,
	id : string
}

interface IAction {
	type : string,
	payload : IListItem | string
}

interface IList {
	toDoList : IListItem[]
}

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';

type TAdd = (payload : IListItem ) => IAction;
type TDel = (payload : string) => IAction;
type TEdit = (payload : IListItem ) => IAction;

export const addTodo:TAdd = (payload) => ( { type: ADD, payload } );
export const delTodo:TDel = (payload) => ( { type: REMOVE, payload } );
export const editTodo:TEdit = (payload) => ( { type: EDIT, payload } );

const initialState:IList = {
	toDoList : []
}

export function reducer1 (state = initialState, { type, payload }:IAction) {
	switch (type) {
		case ADD:
			return { toDoList : [ ...state.toDoList, payload ] }
		case REMOVE:
				return { toDoList : [...state.toDoList.filter(item => item.id !== payload)] }
		case EDIT:
				return { toDoList : [...state.toDoList.map(item => {
					// if (item.id === payload!.id) {
					// 	item.text = payload!.text;
					// }
					console.log(payload);
					return item;
				})] }
		default:
			return state;
	}
}
