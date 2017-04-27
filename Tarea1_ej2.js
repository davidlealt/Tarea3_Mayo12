function inversetriangle(size){
  size = Math.round(size)
  if (size <= 0){console.log('Dont mam')}
  else {
    for (j=size; j>=1; j--){
      var str1 = '*';
      for (i=1; i<j; i++){
        str1 += '*';
      }
      console.log(str1)
    }
  }
}

inversetriangle(20);
