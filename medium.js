const fs = require('fs')

    let p1 = fs.readFileSync(process.argv[2]);
    let parameter = p1.toString().split()
    console.log(parameter);
