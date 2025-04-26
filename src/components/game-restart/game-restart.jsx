import { store } from '../../store';
import styles from './game-restart.module.css';

export const GameRestart = () => {
	const onClickRestart = () => {
		store.dispatch({ type: 'SET_RESTART_GAME' });
	};

	return (
		<>
			<button className={styles.button} onClick={onClickRestart}>
				{' '}
				Начать заново
			</button>
		</>
	);
};
