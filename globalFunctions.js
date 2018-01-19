global.logMax = function(){
        var max = 0;
        for(var i = 0;i<=arguments.length;i++){
            if(arguments[i]>max){
                max = arguments[i];
            }   
        }   
    console.log("The max value of array is "+max);
}

// the `getMin` functions should be return value, not logging!
global.getMin = function(arr){
    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return "The min value is " + min;
}
