export const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const playerArray = (player, field) =>
	field
		.map((cellIndex, index) => {
			if (cellIndex === player) return index;
		})
		.filter((cellIndex) => cellIndex !== undefined);

export const areArraysEqual = (array1, array2) => {
	return array2.every((x) => array1.includes(x));
};
