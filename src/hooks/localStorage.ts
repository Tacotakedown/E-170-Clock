export const StoreItem = (key: string, value: string) => {
	localStorage.setItem(key, value);
};
export const GetItem = (key: string) => {
	return localStorage.getItem(key);
};
