function triangle(size){
  size = Math.round(size)
  if (size <= 0){console.log('Dont mam')}
  else {
    var str1 = '*'
    for (i=0; i<size; i++)
    {
        console.log(str1)
        str1 += '*'
    }
  }
}

triangle(5);
