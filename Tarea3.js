//Esta me la piratée de internet para generar un color random...
function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (x= 0; x< 6; x++ ) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

//Esto ya es mío
var fig = {x:0, y:0, size: 30, color: getRandomColor()}
xSpan = (canvas.width/(fig.size)*2)
ySpan = (canvas.height/(fig.size)*2)

  for (j=0; j<ySpan; j++){
    fig.x = 0
    for(i=0; i<xSpan; i++){
      circle(fig)

      fig.color = getRandomColor()
      fig.size = fig.size*1.333
      fig.x -= fig.size/2
      fig.y -= fig.size/2
      square(fig)

      fig.color = getRandomColor()
      fig.x += fig.size/2
      fig.y += fig.size/2
      triangle(fig)

      fig.x += (fig.size/1.33) * 2
      fig.color = getRandomColor()
      fig.size = 30
    }
    fig.y += fig.size * 2
  }
