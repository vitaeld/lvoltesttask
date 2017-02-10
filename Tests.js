var webdriver = require('selenium-webdriver');

CalcPage = require('./CalcPage.js');

describe("Checking calculator's main functions", function() {
       this.timeout(30000);
       var driver;

      //creates webdriver instance before executing tests
      before(function() {
          driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .build();
        });

      //quits webdriver after all tests executed
      after(function() {
           return driver.quit();
       });

it ("Checks multiplication function", function() {  
var calcPage = new CalcPage(driver);
           calcPage.visit();
calcPage.buttonClick('Btn7');
calcPage.buttonClick('BtnMult');
calcPage.buttonClick('Btn8');
calcPage.buttonClick('BtnCalc');
//Waits untill all jqueries on the page completed
 driver.wait(function() {
   return driver.executeScript('return jQuery.active == 0').then(function (value) {
    return value == true;
   });
 }, 1000);
 var result = '56';
 return calcPage.assertResult(result);
});

it ("Checks addition function", function() {
  var calcPage = new CalcPage(driver);
           calcPage.visit();
  calcPage.buttonClick('Btn9');
  calcPage.buttonClick('Btn5');
  calcPage.buttonClick('Btn4');
  calcPage.buttonClick('BtnPlus');
  calcPage.buttonClick('Btn8');
  calcPage.buttonClick('BtnCalc');

  //Waits untill all jqueries on the page completed
  driver.wait(function() {
   return driver.executeScript('return jQuery.active == 0').then(function (value) {
    return value == true;
   });
   }, 1000);
   var result = '962';
   return calcPage.assertResult(result);
});

it ("Checks subtraction function", function() {
   var calcPage = new CalcPage(driver);
   calcPage.visit();
   calcPage.buttonClick('Btn5');
   calcPage.buttonClick('BtnMinus');
   calcPage.buttonClick('Btn7');
   calcPage.buttonClick('BtnCalc');

  //Waits untill all jqueries on the page completed
  driver.wait(function() {
   return driver.executeScript('return jQuery.active == 0').then(function (value) {
    return value == true;
   });
   }, 1000);
   var result = '-2';
   return calcPage.assertResult(result);
});

it ("Checks division function", function() {
    var calcPage = new CalcPage(driver);
    calcPage.visit();
    calcPage.buttonClick('Btn2');
    calcPage.buttonClick('Btn5');
    calcPage.buttonClick('BtnDiv');
    calcPage.buttonClick('Btn8');
    calcPage.buttonClick('BtnCalc');

    //Waits untill all jqueries on the page completed
    driver.wait(function() {
     return driver.executeScript('return jQuery.active == 0').then(function (value) {
     return value == true;
   });
    }, 1000);
    var result = '3.125';
    return calcPage.assertResult(result);
 });

 it ("Checks division by zero", function() {
     var calcPage = new CalcPage(driver);
    calcPage.visit();
    calcPage.buttonClick('Btn5');
    calcPage.buttonClick('BtnDiv');
    calcPage.buttonClick('Btn0');
    calcPage.buttonClick('BtnCalc');

    //Waits untill all jqueries on the page completed
    driver.wait(function() {
     return driver.executeScript('return jQuery.active == 0').then(function (value) {
    return value == true;
      });
     }, 1000);
    var result = 'Error: DivByZero';
    return calcPage.assertResult(result);
  });

  it ("Checks addition of fractional numbers", function() {
      var calcPage = new CalcPage(driver);
    calcPage.visit();
    calcPage.buttonClick('Btn3');
    calcPage.buttonClick('BtnDot');
    calcPage.buttonClick('Btn5');
    calcPage.buttonClick('BtnPlus');
    calcPage.buttonClick('Btn2');
    calcPage.buttonClick('BtnDot');
    calcPage.buttonClick('Btn6');
    calcPage.buttonClick('Btn8');
    calcPage.buttonClick('BtnCalc');

    //Waits untill all jqueries on the page completed
    driver.wait(function() {
     return driver.executeScript('return jQuery.active == 0').then(function (value) {
    return value == true;
     });
   }, 1000);
    var result = '6.18';
    return calcPage.assertResult(result);
  });

 it ("Checks addition of negative numbers", function() {
     var calcPage = new CalcPage(driver);
    calcPage.visit();
    calcPage.buttonClick('BtnMinus');
    calcPage.buttonClick('Btn5');
    calcPage.buttonClick('BtnPlus');
    calcPage.buttonClick('BtnMinus');
    calcPage.buttonClick('Btn7');
    calcPage.buttonClick('BtnCalc');

    //Waits untill all jqueries on the page completed
    driver.wait(function() {
      return driver.executeScript('return jQuery.active == 0').then(function (value) {
      return value == true;
     });
   }, 1000);
   var result = '-12';
    return calcPage.assertResult(result);
  });
 });