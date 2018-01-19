global.getMax = function(){
        var max = 0;
        for(var i = 0;i<=arguments.length;i++){
            if(arguments[i]>max){
                max = arguments[i];
            }   
        }   
    return max;
}


global.getMin = function(arr){
    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
