let base = Number(prompt("Enter base fare:"));
let distance = Number(prompt("Enter distance:"));
let minutesLate = Number(prompt("Enter minutes late:"));
let seed = Number(prompt("Enter seed:"));

let fare = base + 7 * distance;
if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += Math.floor(0.1 * fare);
}

if (seed % 2 === 1) {
    fare -= seed;
} else {
    fare += seed;
}
fare = Math.ceil(fare / 5) * 5;

alert(fare);