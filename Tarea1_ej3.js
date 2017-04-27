function diagonal(size){
  size = Math.round(size)
  if (size <= 0){console.log('Dont mam')}
  else {
    for (i=1; i<size; i++){
      var str1 = '';
      for (j=1; j<size; j++){
        if (i==j){str1 += '0'}
        else {str1 += '*'}
      }
      console.log(str1)
    }
  }
}

diagonal(20);
