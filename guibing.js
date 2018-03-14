//划分序列
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    var mid = Math.floor((0 + arr.length) / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);


    return merge(mergeSort(left), mergeSort(right));
}

//对每一个序列进行归并
function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        }
        else {
            result.push(left.shift());
        }
    }
    return result.concat(left).concat(right);

}

var arr = [5, 3, 7, 2, 0, 3, 6];

console.log(mergeSort(arr));