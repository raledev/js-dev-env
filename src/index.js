import numeral from "numeral";
import "./index.css";

const courseCost = numeral(1000).format("$0, 0.00");
console.log(`I would pay ${courseCost} for this course.`);
