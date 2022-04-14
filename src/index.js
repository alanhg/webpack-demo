let isEnUs = process.env.LANG === 'en_US.UTF-8';
let isCN = process.env.REGION === 'CN';
// const {LANG} = require('./conf.json');
// let b = LANG === 'en_US.UTF-8';
if (isEnUs && isCN) {
  console.log('true');
} else {
  console.log('false')
}
