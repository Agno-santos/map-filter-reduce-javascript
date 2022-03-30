const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);


}
function mapArray2() {
	const array = [1, 2, 3, 4];

	return array.map(function (item) {
		return item * this.price;
	}, orange);


}


console.log(mapArray());

console.log(mapArray2());