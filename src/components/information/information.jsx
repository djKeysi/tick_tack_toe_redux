import { useEffect, useState } from 'react';
import { store } from '../../store';
import styles from './information.module.css';

/*Если isDraw равен true — 'Ничья';
Если isDraw равен false, но isGameEnded равен true — `Победа: ${currentPlayer}`;
Если isDraw равен false и isGameEnded равен false — `Ходит: ${currentPlayer}*/

export const Information = () => {
	const [state, setState] = useState(store.getState());
	const { currentPlayer, isDraw, isGameEnded } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => {
			unsubscribe();
		};
	});

	return (
		<>
			{!isDraw && !isGameEnded && (
				<div>
					<label>{`Ходит игрок: ${currentPlayer}`}</label>
				</div>
			)}

			{isGameEnded && !isDraw && (
				<div>
					<label
						className={styles.colorWinner}
					>{`Победил игрок: ${currentPlayer}`}</label>
				</div>
			)}
			{isDraw && (
				<div>
					{' '}
					<label className={styles.colorDraw}>{'Ничья'}</label>
				</div>
			)}
		</>
	);
};
