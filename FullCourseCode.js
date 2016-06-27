/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js

var returnArrayFromCsvString = function(string){
    return string.split(",")
}

//If a number is evenly divisible by 3 return Fizz
//If a number is evenly divisible by 5 return Buzz
//If a number is evenly divisible by both return FizzBuzz
//If a number is NOT evenly divisible by both the parameter


var fizzBuzzMain = function(ValueToTest) {
    //15
    var fizz = 3;
    var buzz = 5;
        var isBuzz = isEvenlyDivisibleInteger(ValueToTest, buzz );
        var isFizz = isEvenlyDivisibleInteger(ValueToTest, fizz );

        if(isBuzz && isFizz){
            return "FizzBuzz";
        }
        if(isFizz) {
            return "Fizz";
        }
        if(isBuzz) {
            return "Buzz";
        }

        return ValueToTest;
}





/*{

    try{
        for (var i = 0; i < 100; i++) {
            if(i % 3 == 0){
                console.log("Fizz")
            }
            if(i % 5 == 0){
                console.log("Buzz")
            }
            if(i % 3 == 0 && i % 5 == 0){
                console.log("FizzBuzz")
            }
            if(i % 3 != 0 || i % 5 != 0){
                console.log(i)
            }
        }
    }
    catch(ex){
        throw ex;
    }
}*/

var returnStringFizzBuzz = function(intUnderTest){

}

var isEvenlyDivisibleInteger = function(dividend, divisor){

    return(dividend % divisor == 0);


}

module.exports = {
    ReturnArrayFromCsvString : returnArrayFromCsvString,
    FizzBuzzMain : fizzBuzzMain,
    BoolCheckForEvenlyDivisibleInteger : isEvenlyDivisibleInteger,
    ReturnStringFizzBuzz : returnStringFizzBuzz
}

