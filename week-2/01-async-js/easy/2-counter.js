let counter=0
function callItself (time){
    setTimeout(()=>{
        console.log(counter)
        counter++
        callItself(time);
    },time)
}

callItself(100)