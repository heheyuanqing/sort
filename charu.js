function charu(arr) {
    var len = arr.length,
        key, i, j;
    for (i = 1; i < len; i++) {
        key = arr[i];
        //记录向后移动
        for (j = i - 1; key < arr[j] && j >= 0; j--) {
            arr[j + 1] = arr[j];
        }
        //插入到适当的位置
        arr[j + 1] = key;

    }
}

//优化
function charu_2(arr) {
    var len = arr.length,
        key, i, j;
    for (i = 1; i < len; i++) {

        if (arr[i - 1] > arr[i]) {      //当前一个数小于后一个数时不需要进行交换
            for (i = 1; i < len; i++) {
                key = arr[i];
                //记录向后移动
                for (j = i - 1; key < arr[j] && j >= 0; j--) {
                    arr[j + 1] = arr[j];
                }
                //插入到适当的位置
                arr[j + 1] = key;
            }
        }
    }
}

    var arr = [8, 2, 6, 8, 7, 5, 0];
    charu_2(arr);
    // charu(arr);
    console.log(arr);