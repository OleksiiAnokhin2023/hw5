let ask_number = 25;
let sum =0;
for (let i=0;i<ask_number;i++){
    if (i%3===0 || i%5===0){
  sum+=i;
    }
}
if (sum<0){
    console.log(0);
}
console.log(sum);