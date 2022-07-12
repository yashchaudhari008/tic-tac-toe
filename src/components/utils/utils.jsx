export const stringInsert = (str, substr, index) =>
	str.substring(0, index) + substr + str.substring(index + substr.length);
