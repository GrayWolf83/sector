export function sortItems(items, sortData) {
	return sortData.arrow === 'down'
		? items.sort((a, b) => (a[sortData.name] > b[sortData.name] ? 1 : -1))
		: items.sort((a, b) => (a[sortData.name] < b[sortData.name] ? 1 : -1))
}
