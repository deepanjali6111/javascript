const tinderuser  = new Object()
tinderuser.id="123"
tinderuser.login="safola"
tinderuser.password ="angular"
console.log(tinderuser)
const obj1={
    1: "a",
    2: "b"
}
const obj2 ={3: "c", 4: "d"}
//const obj3=Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
const {id}= tinderuser
console.log(id)
