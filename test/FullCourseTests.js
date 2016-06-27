/** Created by jason.wollam on 6/17/2016. ...*/

//FullCourseTests.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect();

var scriptToTest = require('../FullCourseCode.js');
var fizzBuzzMain = scriptToTest;





describe("When Calling FizzBuzz main it", function(){
    it("Should run to completion without error", function(){
        //Assert
        //assert.doesNotThrow(fizzBuzzMain);
        assert.doesNotThrow(function(){
            fizzBuzzMain(7);
        })
    })

   

    it("Should return fizzBuzz when passing 15 as value to test", function(){
        //Arrange
        var ValueToTest = 15;
        //Act
        var result = fizzBuzzMain(ValueToTest);
        //Assert
        assert(result === "FizzBuzz");
    })

    it("Should return fizz when evenly divisible by 3", function(){
        //Arrange
        var ValueToTest = 3;
        //Act
        var result = fizzBuzzMain(ValueToTest);
        //Assert
        assert(result === "Fizz");
    })

    it("Should return Buzz when evenly divisible by 5", function(){
        //Arrange
        var ValueToTest = 5;
        //Act
        var result = fizzBuzzMain(ValueToTest);
        //Assert
        assert(result === "Buzz");
    })

    it("Should return the number if not evenly divisible by 3 or 5", function(){
        //Arrange
        var ValueToTest = 7;
        //Act
        var result = fizzBuzzMain(ValueToTest);
        //Assert
        assert(result === 7);
    })
})


