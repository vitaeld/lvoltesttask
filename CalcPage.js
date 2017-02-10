
    var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var assert = require('assert');
    CalcPage = function CalcPage(driver) {
    this.driver = driver;
    this.url = 'http://web2.0calc.ru/';
};
//navigating to test url
CalcPage.prototype.visit = function() {
   return this.driver.get(this.url);
};
//clicking buttons 
CalcPage.prototype.buttonClick = function(buttonId) {
   return this.driver.findElement(By.id(buttonId)).click(); 
    };
//asserting results
CalcPage.prototype.assertResult = function (result){
    return this.driver.findElement(By.id('input')).getAttribute('value').then(function(value) {
      assert.equal(value, result);
   });
}
module.exports = CalcPage;