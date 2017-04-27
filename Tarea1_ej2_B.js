function inversetriangle(size){
  size = Math.round(size)
  if (size <= 0){console.log('Dont mam')}
  else {
    var str1 = '*';
    for (i=1; i<size; i++){
      str1 += '*';
    }

    for (i=size; i>=1; i--){
      console.log(str1)
      str1 = str1.slice(0,-1);
    }
  }
}

inversetriangle(20);
