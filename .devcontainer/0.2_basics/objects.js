const mysym = Symbol("key1")

const user ={
    name:"deepa",
    age:21,
    [mysym]:"mykey1",
    months:["mon","tues"]
}
console.log(user.name)
console.log(user["name"])
console.log(user.age)
console.log( typeof user.mysym)
console.log(user[mysym])
console.log(user)
user.greet = function(){
    console.log("heloo js")
}
user.greet2 = function(){
    console.log(`heloo js2,${this.name}`)
}
console.log(user.greet())
console.log(user.greet2())