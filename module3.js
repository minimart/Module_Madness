var randomNumber = require('./module1');
var toLocale = require('./module2');
// console.log(randomNumber);
// console.log(toLocale);
module.exports = {
    balance: function returnRandomBalance() {
        return toLocale(randomNumber(100, 1000000))
    },
    text: function accountString() {
        return 'Account balance: \n';
    }
}
