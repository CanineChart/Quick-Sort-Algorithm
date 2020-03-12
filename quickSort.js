// 1. arr
// 2. partition
// 3. quickSort

const arr = [];

for (let i = 0; i < 100; i++) {
	arr.push(Math.floor(Math.random() * 100));
}

function swap(arr, i, j) {
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

console.log(arr);
console.log(arr.sort()); // Default Sort Method

function partition(arr, left, right) {
	let pivot = arr[Math.floor((left + right) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		while (arr[i] < pivot) {
			i++;
		}

		while (arr[j] > pivot) {
			j--;
		}

		if (i <= j) {
			swap(arr, i, j);
			i++;
			j--;
		}
	}

	return i;
}

console.log(partition(arr, 0, arr.length - 1));

function quickSort(arr, left, right) {
	let index;
	index = partition(arr, left, right);

	if (left < index - 1) {
		quickSort(arr, left, index - 1);
	}

	if (index < right) {
		quickSort(arr, index, right);
	}

	return arr;
}

console.log('Sorted Array: ');

console.log(quickSort(arr, 0, arr.length - 1));
