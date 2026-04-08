let N = Number(prompt("enter N"));
let seed = Number(prompt("enter seed"));
let c = 0;
while (c<3){
    if (N%2===0){
        N=Math.floor(N/2)+seed;
    }else{
        N=(N*3)-seed;
    }
    c+=1;
}

if (N >= 100 && N <= 999){
    let temp=Math.floor(N/10);

    if (temp%10===seed){
        alert("YES, " + N);
    } else {
        alert("NO, "+ N);
    }
} else {
    alert("NO, "+ N);
}
