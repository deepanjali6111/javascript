const arr=[1,2,3,4,5]
/*const initialvalue=0;
const mynum= arr.reduce( (accumulator,currentval)=>
accumulator+currentval,initialvalue);
//first in acc initialval wiil go thats zero then updation will continue
console.log(mynum)*/
/*const mynum= arr.reduce( function(accumulator,currentval){
 return accumulator+currentval
},0);

console.log(mynum)*/
const shoppingcart=[
    {
        name:"chips",
        price:50
    },
    {
        name:"beverages",
        price: 1000
    },
    {
        name:"sauce",
        price:100
    },
]
const pricetopay=shoppingcart.reduce( (accumulator,item)=>accumulator+item.price,0);
console.log(pricetopay)
