// test.js
var str = 'test is loaded';

var main = document.getElementById('root');
main.innerText = 'hello world';
var queryString = require('query-string');
main.innerText += JSON.stringify(queryString.parse(location.search));

module.exports = str;
