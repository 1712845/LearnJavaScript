let fs = require('fs');

let text  = fs.readFileSync('./song.txt',{encoding: 'utf8'});
console.log(text);

fs.writeFileSync('./song_2.txt','I yeu bac HCM hon thieu nien nhi dong');