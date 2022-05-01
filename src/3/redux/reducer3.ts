import { ActionTypes } from "./actionCreators"

interface IState {
	waterState : string
}

interface IAction {
	type: string,
	payload? : string
}

const initialState: IState = {
	waterState : 'inBetween'
}

export default (state = initialState, { type, payload }: IAction) => {
	switch (type) {

	case ActionTypes.GAS:
		state.waterState = 'Like Wapor';
		return { ...state }

	case ActionTypes.LIQUID:
		state.waterState = 'Watery';
		return { ...state }

	case ActionTypes.SOLID:
		state.waterState = 'Ice Ice';
		return { ...state }
	default:
		return state
	}
}
