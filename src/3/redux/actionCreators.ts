export enum ActionTypes {
	LIQUID = 'LIQUID',
	GAS = 'GAS',
	SOLID = 'SOLID'
}

export const liquid = () => ({ type : ActionTypes.LIQUID })
export const gas = () => ({ type : ActionTypes.GAS })
export const solid = () => ({ type : ActionTypes.SOLID })