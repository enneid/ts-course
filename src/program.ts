import P5 from "p5";
// DEMO: A sample class implementation
import MyCircle from "./MyCircle";

const myCircles: MyCircle[] = [];
export function setup(this: P5){

    const canvas = this.createCanvas(200, 200);
    canvas.parent("app");

    // Configuring the canvas
    this.background("white");

    // DEMO: Create three circles in the center of the canvas
    for (let i = 1; i < 4; i++) {
        const p = this.width / 4;
        const circlePos = this.createVector(p * i, this.height / 2);
        const size = i % 2 !== 0 ? 24 : 32;
        myCircles.push(new MyCircle(this, circlePos, size));
    }
}


export function draw(this: P5) {
    // DEMO: Let the circle instances draw themselves
    myCircles.forEach(circle => circle.draw());
};
