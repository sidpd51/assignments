const fs = require('fs')

// let a = new Promise((resolve,reject)=>{
//     fs.readFile('lorem.txt', 'utf-8', (err, data)=>{
//         resolve(data) 
//         if(err) reject(err) 
//     })
// })

// // console.log(a)
// a.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err.message)
// })

async function fn () {
    let a = await new Promise((resolve,reject)=>{
        fs.readFile('lorem.txt', 'utf-8', (err, data)=>{
            resolve(data) 
            if(err) reject(err) 
        })
    })
    console.log(a)
}

fn()


