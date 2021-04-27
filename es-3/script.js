function raddoppio(array) {
    return array.map(element => element * 2);
}

function raddoppioFor(array) {
    const result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}

function subList(array, startIndex, endIndex) {

    return array.filter((element, index) => index >= startIndex && index <= endIndex);
}

function subListForEach(array, startIndex, endIndex) {
    const result = [];

    array.forEach((a, index) => {
        if (index >= startIndex && index <= endIndex) {
            result.push(a);
        }
    });

    return result;
}

var array = [10, 5, 6, 11, 20];

var nuovoArray = subList(array, 1, 3);
console.log(nuovoArray);

var nuovoArray2 = subListForEach(array, 1, 3);

console.log(nuovoArray);
console.log(nuovoArray2);