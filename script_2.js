function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return console.log(answer);
    }  
  }
  let n = prompt("entrez un nombre");
  factorial(n)