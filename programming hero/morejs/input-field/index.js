function checkAge(){
    
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById("error")

    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw 'please inter a valid age';
        }
        else if(age < 18){
            throw 'minor is not allowed';
        }
        else if(age > 30){
            throw 'you are too old';
        }
        errorTag.innerHTML = "";
    }
    catch(err){
        console.log("Error:" + err) 
    }finally{
        console.log("all done inside try catch")
    }
    console.log("1234234");
    
}