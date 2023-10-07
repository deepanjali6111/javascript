const arr=[31,14,15,32,24]
for(const num of arr){
    console.log(num)
}
const greeting="hello worlds"
for(const greet of greeting){
    if(greet===" "){
        continue;
    }
    console.log(` this is ${greet}`)
}
/***** MAP *****/
const map=new Map();
map.set('fr',"france")
map.set('in',"india")
map.set('un',"united states")
/*for(const key of map){
    console.log(key)
}*/
//de-structure array
for(const [key,value] of map){
    console.log(key,':->',value)
}
/*const myobj={
    name:"hemant",
    age:43
}
for(const num of myobj){
    console.log(num)

}*/ //not iterable
const myobj={
    name:"hemant",
    age:43
}
for(const key in myobj){
   // console.log(key)
   // console.log(myobj[key])
    console.log(`${key} is for ${myobj[key]}`)
    
}
const coding =['js','python','css','java']
/*coding.forEach((item)=>{
    console.log(item)
})*/
/*coding.forEach( function(item) {
    console.log(item)
})*/
/*function printMe(item){
    console.log(item)
}
coding.forEach(printMe)*/
/*coding.forEach( (item,index,arr) =>{
     console.log(item,index,arr)
})*/
const beta = [
    {
        name:"javascript",
        codein:"github"
    },
    {
        name:"css",
        codein:"vscode"
    },
    {
        name:"python",
        codein:"pycharm"
    },
]
beta.forEach( (item) => {
    console.log(item.codein)

})
