import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const expect = chai.expect;

import calculatorPage from './calculator.po';

module.exports = function() {

	this.Given(/^I am in calculator page$/, function() {
		return calculatorPage.go();
	});

	this.When(/^I add "([^"]*)" and "([^"]*)"$/, function(firstNumber, secondNumber) {
		return calculatorPage.add(firstNumber, secondNumber);
	});

	this.Then(/^I should get a result of "([^"]*)"$/, function(sum) {
		return expect(calculatorPage.result.getText()).to.eventually.equal(sum);
	});

};