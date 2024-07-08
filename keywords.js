const fs = require("fs");
const keywordsstr = fs.readFileSync('keywords.txt', 'utf8').toString();
const keywords = keywordsstr.split('\n').map(keyword => keyword.trim());
const id = keywords.indexOf('dfs');
module.exports = keywords;
