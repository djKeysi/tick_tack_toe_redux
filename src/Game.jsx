import styles from './Game.module.css';
import { Field, GameRestart, Information } from './components';

export const Game = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h3>Игра крестики - нолики</h3>
				<div className={styles.grid}>
					<Field />
					<Information />
					<GameRestart />
				</div>
			</div>
		</div>
	);
};
