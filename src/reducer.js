import { areArraysEqual, playerArray, WIN_PATTERNS } from './utils/utils';

const initialState = {
	field: Array(9).fill(' '),
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

// action - объект, который содержит в себе тип действия и полезную нагрузку.
// type - это строка, которая указывает на тип действия.

// dispatch() отвечает за отправку действия, а редьюсер отвечает за обработку этого действия и создание нового состояния.
export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_ON_CLICK_CELL': {
			const newField = [...state.field];
			newField[payload] = state.currentPlayer;

			WIN_PATTERNS.forEach((cellIndex) => {
				if (areArraysEqual(playerArray('X', newField), cellIndex)) {
					state.currentPlayer = 'O';
					state.isGameEnded = true;
				} else if (areArraysEqual(playerArray('O', newField), cellIndex)) {
					state.currentPlayer = 'X';
					state.isGameEnded = true;
				}
				if (
					(playerArray('O', newField).length === 4 &&
						playerArray('X', newField).length === 5) ||
					(playerArray('O', newField).length === 5 &&
						playerArray('X', newField).length === 4)
				) {
					state.isDraw = true;
				}
			});

			return {
				...state,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				field: newField,
			};
		}
		case 'SET_RESTART_GAME': {
			return {
				field: Array(9).fill(' '),
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
			};
		}
		default:
			return state;
	}
};
