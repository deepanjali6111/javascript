 const promiseOne = new Promise( function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)//after 1sec timeout

})
promiseOne.then(function(){
    console.log('promise consumed')
})
/** */


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
}) 
/** */

 
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"parallex@ex.com"},1000)
    })
})
promiseThree.then(function(user){
    console.log(user)
})
/** */
 

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
        resolve({username:"kamel",password:'123'})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log('promise is resolved or rejected'))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
        resolve({username:"kevin",password:'209'})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

/*async function getAllUsers(){
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log('ERROR:e')
    }
}
getAllUsers()*/
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))