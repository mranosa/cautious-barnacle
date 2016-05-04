export default {
	url: '#/brands/create',

	firstInput: element(by.model('first')),
	secondInput: element(by.model('second')),
	computeButton: element(by.id('gobutton')),
	result: element(by.binding('latest')),
	memoryListValues: element.all(by.repeater('result in memory').column('result.value')),

	go: () => {
		return browser.get('http://localhost:3456/');
	},

	add: function add(first, second) {
		return new Promise((success, failure) => {
			this.firstInput.sendKeys(first);
			this.secondInput.sendKeys(second);

			return this.computeButton.click().then(() => {
				success();
			});
		});
	}
};