const flatten = function(array){
  const newArr = []
  for (let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
      for (item in array[i]){
        newArr.push(array[i][item])
      }
    }
  else{
     newArr.push(array[i])
   }
  }
  return newArr
  
}
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6])
