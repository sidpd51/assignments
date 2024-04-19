// let a = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         // reject(new Error("Whoops!"))
//         resolve("happy happy happy ")
//     }, 2000);
// })

// console.log(a);

// a.then(function(data){
//     console.log(data)
// }).catch(function(data){
//     console.log(data);
// })

// setTimeout(()=>{
//     console.log('first async fucntion')
// }, 5000)

// setTimeout(()=>{
//     console.log('second async function')
// },4000)


// let a =0
//busy waiting
// for(let i=0; i<1000000000; i++){
//     a++
// }

// console.log('sync process1')

// setTimeout(()=>{
//     console.log('third async function')
// },100)


// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   promise.then(alert);

// let arr = ['a','b', 'c']

// console.log(arr.findIndex('a'))

// function wait(n) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve()
//         }, n)
//     })
// }

// let start = Date.now()
// wait(2)
// console.log(Date.now()-start)



function wait1(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve()
        }, t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve()
        }, t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve()
        }, t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    return Promise.all([wait1(t1),
        wait2(t2),
        wait3(t3)
    ])
}
calculateTime(1,2,3).then((values)=>{
    console.log(values)
})