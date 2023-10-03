function sayname(){
    console.log('H')
    console.log('M')
    console.log('H')
}
sayname()
function add(num1,num2){
    console.log(num1+num2)
}
function add2(num1,num2){
    let result= num1+num2
    return result
}
add(2,4)//passing arguments to function
add(2,"4")
const result= add2(2,4)
console.log("result:",result)
 const user={
    name:"yasif",
    loginid:"acef",
    mesageWeb:function(){
        console.log(`${this.name}`)
        //console.log(this)

    }


 }
 user.mesageWeb()

 user.name="samuel"
 user.mesageWeb()
 console.log(this)
 function aplha(){
    //console.log(this);
 }
 aplha()
 const beta = (num1,num2) => {
    return num1+num2
 }
 console.log(beta(6,7))
 const betaOne = (num1,num2) =>  num1+num2
 console.log(betaOne(6,7))
 const betaTwo = (num1,num2) =>  ({username:"meral"})
 console.log(betaTwo(6,7))
 