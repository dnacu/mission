function caesar(s, n) {
	var result = "";
	// 함수를 완성하세요.
  var i, ascii;
  for(i=0; i<s.length; i++){
  	if(s[i] == ' ') result+=' ';
    else{
      ascii = s.charCodeAt(i)
      if(ascii>90){ //소문자
      	ascii += n%26;
        if(ascii > 122) ascii -= 26;
      }else{
    		ascii += n%26;
        if(ascii > 90) ascii -= 26;
      }
      result += String.fromCharCode(ascii);
    }
  }
  console.log(result);
	return result;
}

// 실행을 위한 테스트코드입니다.
console.log('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4));