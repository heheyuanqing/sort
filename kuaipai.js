function quickSort(arr) {
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
}

var arr = [1,5,0,8,4,9];
console.log(quickSort(arr));