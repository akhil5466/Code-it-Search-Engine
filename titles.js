const fs = require("fs");
const titlesstr = fs.readFileSync("problem-titles.txt").toString();
const titles = titlesstr.split(/\r?\n/).map(title => title.trim());
console.log(titles);
module.exports = titles;
