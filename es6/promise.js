let fetchData = new Promise((resolve,reject)=>{
    let data = true;
    if(data){
        resolve("data received");
    }
    else{
        reject("data not recieved");
    }
})

fetchData.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})