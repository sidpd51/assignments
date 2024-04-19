setInterval(()=>{
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    

    console.log(`12 hour format: ${hours}:${minutes}:${seconds}`)
    console.log(`24 hour format: ${hours>12?hours-12:hours}:${minutes}:${seconds} ${hours>12?'PM':'AM'}`)
},1000)