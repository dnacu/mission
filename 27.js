function noOvertime(no, works) {
	var result = 0;
  var i;
  
  for(i=0; i<no; i++){
  	works[works.indexOf(Math.max.apply(null, works))] -= 1;
  }
  
  for(i in works) {
  	result += Math.pow(works[i], 2);
  }
  
  return result;

}
console.log(noOvertime(4, [20,16,14,13,12,11,10,9,8,7]));