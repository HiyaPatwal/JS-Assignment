let N = Number(prompt("enter N"));
let K = Number(prompt("enter K"));
let notFound = true;

for (let X=0; X <= 100000; X++) {
    let num = N+X;
    let rev = 0;
    let temp = num;
    let r = 0; 
    
    while(temp!==0){
        r = temp%10;
        temp = Math.floor(temp/10);
        rev = rev*10+r;
    }
    
    if (num === rev && num % K === 0) {
        alert(X);
        notFound = false;
        break;
    }
}
if (notFound){
    alert("-1");
}
