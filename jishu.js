function jishu(arr) {
    var count = [], result = [],
        m = getM(arr),
        i, j, k;
    //进行m次分配收集
    for (i = 0; i < m; i++) {
        //分配
        for (j = 0; j < arr.length; j++) {
            k = digit(arr[j], i);
            if (count[k] == null) {
                count[k] = [];
            }
            count[k].push(arr[j]);
        }

        //收集
        for (j = 0; j < count.length; j++) {
            if (count[j] != null) {
                while (count[j].length !== 0) {
                    result.push(count[j].shift());
                }
            }
        }
        arr = result;
        result=[];

    }
   return arr;
}

//提取第m位数字
function digit(num, m) {
    if (m === 0) {
        return num % 10;
    }
    else {
        var x = Math.pow(10, m);
        return Math.floor(num / x% 10);
    }
}

function getM(arr) {
    var flag = 1, k;
    arr.map(function (num) {
        k = num.toString().length;
        if (k > flag) {
            flag = k;
        }
    });

    return flag;
}

var arr = [2, 6, 54, 4, 0, 32];
console.log(jishu(arr));