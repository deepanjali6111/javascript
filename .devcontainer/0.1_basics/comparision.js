// >=,==,>,< they all work diffrently
console.log(null>0)
console.log(null==0)
console.log(null>=0)
console.log(undefined>0)
console.log(undefined>=0)
console.log(undefined==0)
//arrays
const heros = ["shaktiman","Marvels","spiderman"]
//objects
let myObj = {
    name:"deepa",
    age:21
}
console.log(heros)
console.log(myObj)
//function
const func  = function(){
    console.log("helloo");
}
/****stack and heap */
/*primitve like string are stored in stack like string and if we pass it valuues to another than its copy is passed and original is not changed*/
/*in heap non-primitive are stored like object and if value is passed to another than original value is passed and any change in that will lead to change in original one*/
console.log(Math.random())//give value b/w 0 and 1
console.log((Math.random()*10)+1)//digit is shifted and to avoid 0 ans we added 1 to it
const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)//range is passed max-min and to avoid zero 1 is added and to ensure min value comes we added min