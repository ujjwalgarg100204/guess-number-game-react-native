export const generateRandomBetween = (
	min: number,
	max: number,
	exclude?: number,
): number => {
	const random = Math.floor(Math.random() * (max - min)) + min;
	if (random === exclude) return generateRandomBetween(min, max, exclude);
	return random;
};
