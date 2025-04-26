import { useEffect, useState } from 'react';
import { store } from '../../store';
import styles from './fiels.module.css';

export const Field = () => {
	const [state, setState] = useState(store.getState());
	const { field, isGameEnded } = state; //onClickCell
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => {
			unsubscribe();
		};
	});

	const onClickCell = (index) => {
		//console.log(index);

		store.dispatch({ type: 'SET_ON_CLICK_CELL', payload: index });
	};

	return (
		<>
			{field.map((num, index) => {
				return (
					<div
						onClick={onClickCell.bind(null, index)}
						className={
							num === ' ' && !isGameEnded
								? styles.cell
								: styles.cell + ' ' + styles.disabled
						}
						key={index}
					>
						{num}
					</div>
				);
			})}
		</>
	);
};

// FieldLayout.propTypes = {
// 	field: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
// 	onClickCell: PropTypes.func.isRequired,
// 	isGameEnded: PropTypes.bool.isRequired,
// };
// FieldContainer.propTypes = {
// 	field: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
// 	onClickCell: PropTypes.func.isRequired,
// 	isGameEnded: PropTypes.bool.isRequired,
// };
