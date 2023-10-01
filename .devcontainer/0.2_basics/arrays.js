const arr  =new Array(1,2,3,4,5)
//console.log(arr[1])
const arr2=arr.join()
//console.log(arr2)
//console.log(typeof arr2)
console.log(arr)
const myn1 = arr.slice(1,3)//lasst range is not included
console.log("A " ,arr)//original arr is not changed
console.log(myn1)
const myn2  = arr.splice(1,3)//last range is included
console.log("B " ,arr)//original arr is changed
console.log(myn2)
/**concat and push */
const heros = ["A","B","C"]
const newheros  =["AB","CD","FG"]
//heros.push(newheros)//push will add it to original array
//console.log(heros)
//const newaray=heros.concat(newheros)//it returns a new array therefore we need to store it in new var
//console.log(newaray)
const newarray = [...heros,...newheros]//spread oprerator
console.log(newarray)
console.log(Array.from("deepanjali"))
console.log(Array.from({name:"deepa"}))//returns empty arrays as it cannot directly convert it