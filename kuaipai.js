/*function quickSort(arr) {
   // console.log(arr);
    if(arr.length<=1){
        return arr;
    }
    var left = [], right = [],provit=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<provit){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(provit,quickSort(right));
}*/

//优化
function adjust(arr, start, end) {
    var provit = arr[start],
        low = start,
        high = end;

    while (low < high) {
        //从后向前查询比provit小的数
        while (high > low && arr[high] > provit) {
            high--;
        }
        if (high > low) {
            arr[low] = arr[high];
            low++;
        }
        //从前向后查询比provit大的数
        while (low < high && arr[low] < provit) {
            low++;
        }
        if (low < high) {
            arr[high] = arr[low];
            high--;
        }
    }
    arr[low] = provit;
    return low;
}

function quick(arr, start, end) {
    if (start < end) {
        var i = adjust(arr, start, end);
        quick(arr, start, i - 1);
        quick(arr, i + 1, end);
    }

}


var arr = [1, 5, 0, 8, 4, 9];
quick(arr, 0, arr.length-1);
console.log(arr);