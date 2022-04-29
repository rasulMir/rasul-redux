enum ActionTypes {
	ADD = 'ADD',
	CLEARALL = 'CLEARALL',
	EQUAL = 'EQUAL'
}

export interface IState {
	output: string,
	enter: Array<string | number>
}

interface IAction {
	type : string,
	payload : number | string
}

type TActions = (payload : string | number) => IAction;

export const add: TActions = (payload) => ({ type: ActionTypes.ADD, payload});
export const clearAll: TActions = (payload) => ({ type: ActionTypes.CLEARALL, payload});
export const equal: TActions = (payload) => ({ type: ActionTypes.EQUAL, payload});

const initialState:IState = {
	output : '',
	enter : []
}

export const reducer2 = (state = initialState, { type, payload }:IAction) => {

	
	
	switch (type) {
		
	case ActionTypes.ADD:
		let dot: string | number = state.enter[state.enter.length - 2];
		if (dot === '.' && Number.isInteger(state.enter[state.enter.length - 1])) {
			let dotted = state.enter.slice(-3);
			let num : number = +dotted.reduce((a, i: string | number) => a + i.toString(), '');
			state.enter = [...state.enter.splice(-3, 3), num];
			return { ...state }
		}
		else {
			state.enter = [...state.enter, payload];
			return { ...state }
		}
	case ActionTypes.CLEARALL:
		state.enter = [];
		state.output = '';
		return { ...state }

	// case ActionTypes.EQUAL:
	// 	return { ...state, ...payload }

	default:
		return state
	}
}
