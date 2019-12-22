add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

sum = (a)=>{
    console.log(a)
}

add(1,2,(sum))