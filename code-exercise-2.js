let a = [1,2,3,4,5];
let b = [6,7,8,9,10];
let res=[];
for(let i=0;i<a.length;i++){
res.push(a[i]);
res.push(b[b.length - 1 - i]);
 if(i == a.length - 1){
 break;
}
 res.push(a[a.length - 1 - i]);
 res.push(b[i]);
}
let c=a.length + b.length;
 console.log(res);
 console.log(res.slice(0,c));