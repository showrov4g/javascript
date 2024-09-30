let promise = new Promise((resolve, reject)=>{
    console.log("I have promised");
    reject("some error occurred")
})