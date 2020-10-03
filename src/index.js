exports.min = function min (array) {
    let result = 0;
    if (typeof array === `undefined` || array.length < 1) {
        return result;
    } else {
        result = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < result) {
                result = array[i]
            }
        }
        return result;
    }
}

exports.max = function max (array) {
    let result = 0;
    if (typeof array === `undefined` || array.length < 1) {
        return result;
    } else {
        result = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > result) {
                result = array[i]
            }
        }
        return result;
    }
}

exports.avg = function avg (array) {
    let result = 0;
    if (typeof array === `undefined` || array.length < 1) {
        return result;
    } else {
        for (let i = 0; i < array.length; i++) {
            result = result + array[i]
            }
            result = result / array.length
        }
        return result;
    }


