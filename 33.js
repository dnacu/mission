function jumpCase(num) {
	var fib = [1, 1], i;
  
  if(num == 1) return 1;
  for(i=2; i<=num; i++){
  	fib[i] = fib[i-1] + fib[i-2];
  }
	return fib[num];
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(4));