global.getMax = function(){
        var max = arguments[0];
        for(var i = 1; i<=arguments.length; i++){
            if(arguments[i]>max){
                max = arguments[i];
            }   
        }   
    return max;
}


global.getMin = function(arr){
    var min =  arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}