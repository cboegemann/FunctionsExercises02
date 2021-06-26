//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

const input = require('readline-sync');
let length = 0
let width = 0
let area = 0

function getLength() {
    length = Number(input.question("What is the length of the rectangle? "));
      while (length <= 0) {
        length = Number(input.question("Invalid input. What is the length of the rectangle? "));
      }
}

function getWidth() {
    width = Number(input.question("What is the width of the rectangle? "));
      while (width <= 0) {
        width = Number(input.question("Invalid input. What is the length of the rectangle? "));
      }
}

function rectDimensions() {
    getLength();
    getWidth();
    dimensions = [length, width];
}
    
function areaRectangle() {
    rectDimensions();
    area = dimensions[0] * dimensions[1];
}

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.

//Call your area function, then use a template literal to print, “The area is ____ cm^2.”

areaRectangle();
console.log(`The area is ${area} cm^2.`);