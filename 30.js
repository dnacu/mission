function lcm(a,b){
		return a*b/gcd(a,b);
}

function gcd(a,b){
 	 	while(1){
    		var r = a % b;
      	if(r == 0) return b;
      	else if(r == 1) return 1;
      	
      	a = b;
      	b = r;
    }
}

function nlcm(num) {
	var answer = [], i;
  num.sort(function(a,b){return b-a;});
  answer.push(lcm(num[0], num[1]));
  if(num.length == 2) return answer[1];
  for(i=1; i<num.length-1; i++){
  	answer.push(lcm(answer[i-1], num[i+1]));
  }
  //console.log(num);
	return answer[answer.length-1];
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(nlcm([2,6,8,14]));