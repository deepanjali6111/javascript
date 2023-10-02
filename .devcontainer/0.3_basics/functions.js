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