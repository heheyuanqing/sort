function zhijie(arr) {
    var len = arr.length,
        i, j, min, temp;

    for (i = 0; i < len - 1; i++) {
        min = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}

var arr = [9, 8, 2, 46, 78, 0, 1];
zhijie(arr);
console.log(arr);