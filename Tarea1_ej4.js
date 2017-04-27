function square(size){
  size = Math.round(size)
  if (size <= 0){console.log('Dont mam')}
  else {
    for (i=1; i<=size; i++){
      var str1 = '';
      for (j=1; j<=size; j++){
        if (i==1){str1 += '0'}
        else if (i==size){str1 += '0'}
        else {
          if (j==1) {str1 += '0'}
          else if (j==size) {str1 += '0'}
          else {str1 += '*'}
        }
      }
      console.log(str1)
    }
  }
}

square(20);
