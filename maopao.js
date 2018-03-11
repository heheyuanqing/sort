/*
function maopao(arr) {
    var len = arr.length;
    var i, j, temp;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
*/

//优化
function maopao(arr) {
    var flag = true,
        len = arr.length,
        i;
    while (flag) {
        flag = false;
        for (i = 0; i < len-1; i++) {

            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                flag = true;
            }
        }

    }

}

var arr = [5, 8, 8,5,1,20];
maopao(arr);
console.log(arr);