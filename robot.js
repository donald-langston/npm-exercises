const robot = require("robotjs");

robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT");
robot.keyTap("enter");

var screenSize = robot.getScreenSize();
var screenHeight = screenSize.height / 2;
var screenWidth = screenSize.width;

for(var i = 0; i < screenWidth; i++) {
    robot.moveMouse(i, screenHeight);
}
