function maopao(arr){
    var len=arr.length;
    var i,j,temp;
    for (i=0;i<len;i++){
        for(j=i+1;j<len;j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
}

var arr=[5,8,1,7,3,4,2,0];
maopao(arr);