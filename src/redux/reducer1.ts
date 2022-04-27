interface IAction {
	type : string,
	payload : string | IListItem
}

interface IListItem {
	text : string,
	id : string
}

interface IList {
	toDoList : IListItem[]
}

const initialState:IList = {
	toDoList : [{
		text : '',
		id : ''
	}]
}

// type TAction = (payload : string) => IAction;

// type TReducer = (state: IList, { type, payload }:IAction) => {};

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';

// export const addTodo:TAction = (payload) => ( { type: ADD, payload } );

export function reducer1 (state = initialState, { type, payload }:IAction) {
	switch (type) {

	case ADD:
		return { toDoList : [ ...state.toDoList, payload ] }
	case REMOVE:
			return { toDoList : [...state.toDoList.filter(item => item.id !== payload)] }
	// case EDIT:
	// 	return { ...state, toDoList : [...state.toDoList, payload] }
	default:
		return state
	}
}
