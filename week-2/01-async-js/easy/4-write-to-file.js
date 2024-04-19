const fs = require('fs')

let data = "this is sid writing the file using fs module"

fs.writeFile('demo.txt', data, (err)=>{
    if(err) console.log(err)
    else console.log('Successfully written the file!')
})