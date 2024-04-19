const fs = require('fs')

fs.readFile('file.txt', 'utf-8', function(err,data){
    let val = data.replace(/\s+/g, ' ').trim()
    fs.writeFile('file.txt', val, (err)=>{
        if(err){
            // console.log(err)
        }else{
            console.log('successfully written the file!')
        }
    })
})