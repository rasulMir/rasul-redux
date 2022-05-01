export enum ActionTypes {
	NUMBER='NUMBER',
	COMMA='COMMA',
	ADD = 'ADD',
	CLEARALL = 'CLEARALL',
	EQUAL = 'EQUAL',
	SUBSTRACT='SUBSTRACT',
	MULTIPLY='MULTIPLY',
	DIVISION='DIVISION'
}

interface IAction {
	type : string,
	payload? : number
}

export function number(number: number): IAction {
	return {
			type: ActionTypes.NUMBER,
			payload: number
	}
}
export function comma(): IAction{
	return {
			type: ActionTypes.COMMA,
	}
}
export function clear(): IAction{
	return {
			type: ActionTypes.CLEARALL,
	}
}
export function equal(): IAction{
	return {
			type: ActionTypes.EQUAL,
	}
}
export function add(): IAction{
	return {
			type: ActionTypes.ADD,
	}
}
export function substract(): IAction{
	return {
			type: ActionTypes.SUBSTRACT,
	}
}
export function multiply(): IAction{
	return {
			type: ActionTypes.MULTIPLY,
	}
}
export function division(): IAction{
	return {
			type: ActionTypes.DIVISION,
	}
}