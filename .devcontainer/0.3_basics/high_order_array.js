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
/*beta.forEach( (item) => {
    console.log(item.codein)

})*/
/*const value=coding.forEach( (item) => {
    //console.log(item)
    return item; //.foreach doesnot return anything its undefined
})
console.log(value) */
const nums=[1,2,3,4,5,6,7,8,9,10]
/*const result=nums.filter((num)=> num>4)
console.log(result);*/
/*const result2=nums.filter((num)=> {
    return num>4//scope starts with curly braces nedds return statement
})
console.log(result2);*/
/*const newnum=[]
nums.forEach( (num)=>{
    if(num>4){
        newnum.push(num)
    }
})
console.log(newnum)*/
/*const gamma = nums.map( (num)=>num+10)
console.log(gamma)*/
const chaining = nums
                    .map( (num)=>num+10)
                    .map((num)=>num+1)
                    .filter( (num)=>num>=15)
console.log(chaining)

