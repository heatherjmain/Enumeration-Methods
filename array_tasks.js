var arrayTasks = {



	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},



	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},



	square: function (arr) {
		var squared = arr.map(function(number) {
			return number * number;
		});
		return squared;
	},



	sum: function (arr) {
		var sum = arr.reduce(function(runningTotal, currentElement) {
			return runningTotal + currentElement
		}, 0);
		return sum;
	},



	findDuplicates: function (arr) {
		var duplicatesArray = [];

		arr.forEach(function(element, index) {
			if (arr.indexOf(element, index + 1) > -1) {
				if (duplicatesArray.indexOf(element) === -1) {
					duplicatesArray.push(element);
				}
			}
		});
		return duplicatesArray;
	},

	// // OR, can be solved using a hash
	// findDuplicates: function (arr) {
	// 	var counts = {};
	//
	// 	var newSolution = arr.filter(function(item) {
	// 		if (!counts[item]) {
	// 			counts[item] = 1
	// 		} else {
	// 			counts[item] += 1
	// 			if (counts[item] === 2) return true
	// 		}
	// 	});
	// 	return newSolution;
	// },



	removeAndClone: function (arr, valueToRemove) {
		var valuesToKeep = [];

		arr.forEach(function(value) {
			if (value !== valueToRemove) {
				valuesToKeep.push(value);
			}
		})
		return valuesToKeep;
	},



	findIndexesOf: function (arr, itemToFind) {
		var indices = [];

		var idx = arr.indexOf(itemToFind);
		while (idx != -1) {
			indices.push(idx);
			idx = arr.indexOf(itemToFind, idx + 1);
		}
		return indices;
	},



	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNumbersSquared = [];

		arr.filter(function(number) {
			if (number % 2 === 0) {
				evenNumbersSquared.push(number * number);
			}
		});

		var sum = evenNumbersSquared.reduce(function(runningTotal, currentElement) {
			return runningTotal + currentElement
		}, 0);
		return sum;
	}

// // OR, a smaller solution
// 	sumOfAllEvenNumbersSquared: function (arr) {
// 		return arr.reduce(function(total, number) {
// 			if (number % 2 === 0) {
// 				return total + Math.pow(number, 2)
// 			}
// 			return total
// 		}, 0)
// 	}
}


module.exports = arrayTasks
