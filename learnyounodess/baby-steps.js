

//CHALLENGE 2
// function argumentsSum (p1) {
//     let sum = 0
//     for (let i = 2; i < p1.length; i++){
//         sum += Number(p1[i])
//     }
//     return sum
// }
// console.log(process.argv)
// console.log(argumentsSum(process.argv))


// CHALLENGE 3


//CHALLENGE 4
// const fs = require('fs')

//     // let p1 = fs.readFile(process.argv[2], 'utf8', function(err, data){
//     //     let parameter = p1.toString().split('\n').length-1;
//     //     console.log(parameter)
//     // }

//     var fs = require('fs');
// var file = process.argv[2];

// fs.readFile(file, function (err, contents) {
//     var lines = contents.toString().split('\n').length - 1;
//     console.log(lines)
// });


// CHALLENGE 5
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file);
        }
    });
});