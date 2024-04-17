const fs = require('fs')

fs.readFile('3-read-from-file.md', 'utf-8', (err, data)=>{
    console.log(data)
})

setTimeout(()=>{
    console.log('inside settimeout')
},10)

console.log('hello world')

//busy waiting
let a =1
for(let i =0; i<10000000000; i++){
    a++
}

console.log('sync call')