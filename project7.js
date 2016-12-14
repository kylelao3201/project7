var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

var drawing = false

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(xpos, ypos, size, color) {
  var newSquare = document.createElementNS(namespace,"rect")
  newSquare.setAttribute("fill", color)
  newSquare.setAttribute("width", size)
  newSquare.setAttribute("height", size)
  newSquare.setAttribute("x", xpos)
  newSquare.setAttribute("y", ypos)
  screen.appendChild(newSquare)

  // square drawing code here
}

function drawCircle(xpos, ypos, size, color) {
  var newCircle = document.createElementNS(namespace,"circle")
  newCircle.setAttribute("fill", color)
  newCircle.setAttribute("r", size)
  newCircle.setAttribute("cx", xpos)
  newCircle.setAttribute("cy", ypos)
  screen.appendChild(newCircle)
  // circle drawing code here
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  var pt = transformPoint(e)
  drawing = true
})

document.addEventListener("mouseup", function(e) {
  var pt = transformPoint(e)
  drawing = false
})

document.addEventListener("mousemove", function(e) {
  // what do you want to do when the user move
  // on the mouse button?
if (drawing == true) {
  var pt = transformPoint(e)
  var xpos= pt.x
  var ypos= pt.y
//2
var shapeSelect = document.getElementById("shapeSelect").value
var colorSelect = document.getElementById("colorSelect").value
var sizeSelect = document.getElementById("sizeSelect").value
//3
  if(shapeSelect == "square"){
    drawSquare(pt.x, pt.y, sizeSelect, colorSelect)

  }
    else if (shapeSelect = "circle"){
      drawCircle(pt.x, pt.y, sizeSelect, colorSelect)

  }
}
})
