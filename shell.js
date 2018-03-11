function shell(arr) {
    var len = arr.length,
        dis, i, j, temp;

    for (dis = Math.floor(len/2); dis > 0; dis =Math.floor(dis/2)) {
        for (i = dis; i < len; i++) {
            for (j = i - dis; j >= 0; j -= dis) {
                if (arr[j] > arr[j + dis]) {
                    temp = arr[j + dis];
                    arr[j + dis] = arr[j];
                    arr[j] = temp;
                }
            }
        }

    }
}

var arr = [5, 7, 9, 2, 0, 1];
shell(arr);
console.log(arr);