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
