// Rover Object Goes Here
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog:[],
}

// ======================

// ======================
function turnLeft(){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("turnLeft was called! The new direction is: " + rover.direction);
}

function turnRight(){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("turnRight was called! The new direction is: " + rover.direction);
}

function moveForward(){
  if (rover.direction === 'N' && rover.y > 0){
    rover.y += -1;
  }
    else if (rover.direction === 'E' && rover.x < 10){
      rover.x += 1
    }
    else if (rover.direction === 'S' && rover.y < 10){
      rover.y += 1
    }
    else if (rover.direction === 'W' && rover.x>0) {
      rover.x += -1
    }
  {console.log("moveForward was called! The new position is x:" + rover.x + " & y:" + rover.y);
  }
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
}  

  

  function command(){
    var str = "rffrfflfrff";
  for (var i = 0; i < str.length; i++){
    switch (str[i]) {
      case 'f': 
        moveForward();
        break;
      case 'l': 
        turnLeft();
        break;
      case 'r':
        turnRight();
        break;
    }
  }
  console.log(rover.travelLog);
  }
// var travelLog = [] rover.travelLog.push(rover.x & rover.y; {console.log(travelLog);}