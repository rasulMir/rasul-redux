import { evaluate } from "mathjs";
import { ActionTypes } from "./actionCreators";

type TStateArr = Array<string | number | undefined>;

export interface IState {
	symbols: TStateArr
}

interface IAction {
	type : string,
	payload? : number | string
}

const initialState:IState = {
	symbols : [0]
}

function removeRepeatedSymbols(arr: TStateArr): TStateArr {
	return arr.join('')
						 .replace(/([-+*./])\1{1,}/g, '$1')
						 .split(''); 
}

function removeCommaExpression(arr: TStateArr): TStateArr {
	let result: TStateArr = [];
	let numbers: TStateArr = arr.join('').split(/[-+*/]/);
	let expressions: TStateArr = arr.join('').replace(/[0-9.]/g, '').split('');

	numbers.forEach((number, index) => {
			let commaIndex: number = numbers.indexOf('.');

			if (commaIndex!==-1 && commaIndex!==numbers.length-1) {
				let dotted: string = numbers.slice(0, -1).join('');
				result.push(dotted);
			}
			if (expressions[index]) result.push(expressions[index])
	});

	return result;
}

export const reducer2 = (state = initialState, { type, payload }:IAction) => {
	
	
	switch (type) {
		
		case ActionTypes.NUMBER: {
			let symbols=state.symbols;
			if (symbols.length === 1 && symbols[0] === 0){
					symbols[0] = payload;
			}
			else symbols.push(payload)
			return   {symbols};
		} 
		case ActionTypes.COMMA: {
				let symbols=state.symbols;
				let isExpression=(/^[-+/*]/).test(`${symbols[symbols.length-1]}`);
				if (isExpression) return state;
				symbols=removeRepeatedSymbols(symbols);
				// symbols=removeCommaExpression(symbols);
				return {symbols}
		}
		case ActionTypes.CLEARALL:{
				return {symbols:[0]};
		}
		case ActionTypes.EQUAL:{
				let symbols=state.symbols;
				let isExpression=(/^[-+*./]/).test(`${symbols[symbols.length-1]}`);
				return isExpression
								? state
								: {symbols: [evaluate(symbols.join(''))]};
		}
		case ActionTypes.ADD:{
				let symbols=state.symbols;
				let isExpression=(/^[-*./]/).test(`${symbols[symbols.length-1]}`);
				isExpression
						? symbols[symbols.length-1]='+'
						: symbols.push('+')
				return {symbols: removeRepeatedSymbols(symbols)}
		}
		case ActionTypes.SUBSTRACT:{
				let symbols=state.symbols;
				let isExpression=(/^[+*./]/).test(`${symbols[symbols.length-1]}`);
				isExpression
						? symbols[symbols.length-1]='-'
						: symbols.push('-');
				return {symbols: removeRepeatedSymbols(symbols)}
		}

		case ActionTypes.MULTIPLY:{
				let symbols=state.symbols;
				let isExpression=(/^[-+./]/).test(`${symbols[symbols.length-1]}`);
				isExpression
						? symbols[symbols.length-1]='*'
						: symbols.push('*');
				return {symbols: removeRepeatedSymbols(symbols)}

		}
		case ActionTypes.DIVISION:{
				let symbols=state.symbols;
				let isExpression=(/^[-+*/]/).test(`${symbols[symbols.length-1]}`);
				isExpression
						? symbols[symbols.length-1]='/'
						: symbols.push('/');
				return {symbols: removeRepeatedSymbols(symbols)}
		}

		default:
			return state
		}
}
