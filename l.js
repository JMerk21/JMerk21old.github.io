function moveForward(spaces) {
    for (var i = 0; i < spaces; i++) {
        queue.push(funcForward);
    }
}

function moveBackward(spaces) {
    for (var i = 0; i < spaces; i++) {
        queue.push(funcBackward);
    }
}

function turnLeft(spaces) {
    for (var i = 0; i < spaces; i++) {
        queue.push(funcTurnLeft);
    }
}

function turnRight(spaces) {
    for (var i = 0; i < spaces; i++) {
        queue.push(funcTurnRight);
    }
}
