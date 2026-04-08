let L=Number(prompt("enter L"));
let R=Number(prompt("enter R"));
let K=Number(prompt("enter K"));

let count=0;
for(let x=L; x<=R;x++){
let r=0;
if (x%K!==0 ){
    continue;
}

let s=0;
let temp=x; 
let flag=false;
while(temp!==0){
    r=temp%10;
    temp=Math.floor(temp/10);
    s+=r;

    if(r===0){
        flag=true;
        break;
    }
}

if(flag){
    continue;
}

let div=0;
let num=1;
while(num<=s){
    if (s%num===0){
        div+=1;
    }
    num++;
}

if(div===2){
    count+=1;
}
}

alert(count);
