import P5 from "p5";
// import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";	// Include if needed
import { draw, setup } from "./program";
// import "./styles.scss";



// Creating the sketch itself
const sketch = (p5: P5) => {
	p5.setup = setup;
	p5.draw = draw;
};

new P5(sketch);
