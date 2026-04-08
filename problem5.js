let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let m = 0;
let sum = 0;
let num = seed + 2;

while (sum<=N){
    m+=1;
    if (m%num!==0){
        sum+=m;
    }
}
alert(m + " " + sum);
