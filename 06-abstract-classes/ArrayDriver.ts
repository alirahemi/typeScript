import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myCircle = new Circle(10,15,20);
let myRectangle = new Rectangle(10,15,20,35);

// declare an array of shapes
let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
