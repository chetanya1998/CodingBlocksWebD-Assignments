//task 1
const array = [5,5,1,2,3,4,5]
array.filter((item,index)=>{
	console.log(item,index,array.indexOf(item),array.indexOf(item)===index,
		);
	return array.indexOf(item) === index
});
//task 2

var fruits = ["apple"];
fruits.forEach(myFunction);

function myFunction(n) 
{
  for(int i=0;i<=n;i++)
  {
  	return i++;
  } 
}
//task 3
var arr = [9123,10000,100000,1234];
var maximum = arr.reduce(function(a, b) {//reducing the array first into two arguements
    return Math.max(a, b);//comapring those two variables
});

//task 4
