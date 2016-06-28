/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js


//If a number is evenly divisible by 3 return Fizz
//If a number is evenly divisible by 5 return Buzz
//If a number is evenly divisible by both return FizzBuzz
//If a number is NOT evenly divisible by both the parameter
var consoleRunner = function() {     //This is the for loop to see the code in the console from the html doc
 for(var i = 0; i<100; i++){
     console.log(fizzBuzzMain(i));
 }
}

var fizzBuzzMain = function(number) {
    //15
    var fizz = 3;
    var buzz = 5;
        var isBuzz = isEvenlyDivisibleInteger(number, buzz );
        var isFizz = isEvenlyDivisibleInteger(number, fizz );

        if(isBuzz && isFizz){
            return "FizzBuzz";
        }
        if(isFizz) {
            return "Fizz";
        }
        if(isBuzz) {
            return "Buzz";
        }

        return number;
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





var isEvenlyDivisibleInteger = function(dividend, divisor){

    return(dividend % divisor == 0);


}

//module.exports = fizzBuzzMain;
