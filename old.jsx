import { useState } from 'react';

import styles from './field.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6],
	// [0, 2, 4, 6],
	// [0, 2, 4, 8], // Варианты побед по диагонали
	// [0, 1, 3, 6],
];

export const Field = () => {};

/*Если isDraw равен true — 'Ничья';
Если isDraw равен false, но isGameEnded равен true — `Победа: ${currentPlayer}`;
Если isDraw равен false и isGameEnded равен false — `Ходит: ${currentPlayer}*/
export const InformationLayout = () => {};

export const Information = () => {};

export const GameLayout = () => {};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X'); //кто ходит в данный момент
	let [isGameEnded, setIsGameEnded] = useState(false); //была ли завершена игра
	let [isDraw, setIsDraw] = useState(false); //была ли ничья
	const [field, setField] = useState(Array(9).fill(' ')); //массив с 9 ячейками

	const X = field
		.map((cellIndex, index) => {
			if (cellIndex === 'X') return index;
		})
		.filter((cellIndex) => cellIndex !== undefined);

	const O = field
		.map((cellIndex, index) => {
			if (cellIndex === 'O') return index;
		})
		.filter((cellIndex) => cellIndex !== undefined);

	const compareFunc = (a, b) =>
		a.length === b.length && a.every((element, index) => element === b[index]);

	let s = '';
	const winner = WIN_PATTERNS.forEach((cellIndex) => {
		if (compareFunc(X, cellIndex)) {
			s = 'Победил игрок: X ';
			isGameEnded = true;
		}

		if (compareFunc(O, cellIndex)) {
			s = ' Победил игрок: Y ';
			isGameEnded = true;
		}
	});

	if ((O.length === 4 && X.length === 5) || (O.length === 5 && X.length === 4)) {
		s = 'Ничья';
		isDraw = true;
		isGameEnded = true;
	}

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h3>Игра крестики - нолики</h3>
				<div className={styles.grid}>
					{field.map((num, index) => {
						return (
							<div
								onClick={() => {
									const newField = [...field];
									newField[index] = currentPlayer;
									setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
									setField(newField);
								}}
								key={index}
								className={`${
									num === ' ' && !isGameEnded
										? styles.cell
										: styles.cell + ' ' + styles.disabled
								} `}
							>
								{num}
							</div>
						);
					})}
					<div>
						{isGameEnded && (
							<button
								disabled={!isGameEnded}
								onClick={() => {
									setField(Array(9).fill(' '));
									s = '';
									setCurrentPlayer('X');
									setIsDraw(false);
									setIsGameEnded(false);
								}}
							>
								{' '}
								Начать заново{' '}
							</button>
						)}
						<div>
							{!isDraw && <label>{`Ходит игрок: ${currentPlayer}`}</label>}
						</div>
						<div>
							<label className={styles.colorLabel}>{s}</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
