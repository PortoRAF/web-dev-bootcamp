var circles = [];

function onKeyDown(event) {
  if (keyData[event.key]) {
    keyData[event.key].sound.play();
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random() * maxPoint;
    var newCircle = new Path.Circle(randomPoint, 150);
    newCircle.fillColor = keyData[event.key].color;
    circles.push(newCircle);
  }
}

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
    if (circles[i].area < 1) {
      circles[i].remove();
      circles.splice(i, 1);
    }
  }
}
