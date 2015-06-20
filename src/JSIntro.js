
exports.Sum = function(num1, num2){

    return (+num1)+(+num2);

}

exports.SumOfArray = function(arrayOfNums){
    var sum=0;

    for(var i in arrayOfNums)
    {
        sum+=(+arrayOfNums[i]);

    }

    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
    var arr=new Array();
    var sum=0;
    var isIn=function(num,arr){

        for(var i=0;i<arr.length;i++)
        {
            if(num==arr[i])
                return true;
        }
        return false;
    }
    for(var j=0;j<arrayOfNums.length;j++)
    {
        if(!isIn(arrayOfNums[j],arr))
        {
            arr.push(arrayOfNums[j]);
            sum=sum+arrayOfNums[j];
        }
    }
    return sum;
}

exports.ReverseString = function(str){

    return str.split("").reverse().join("");
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
    arr=new Array();
    for(var i=arrayOfStrings.length-1;i>=0;i--)
    {
        arr.push(arrayOfStrings[i]);
    }
    return arr;
}