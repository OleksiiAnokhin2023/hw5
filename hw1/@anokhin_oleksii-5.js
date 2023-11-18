let ask_number = "2 5 -7 9 3";
let arr=Array.from(ask_number.split(" "), Number);
let HighAndLow = (arr)=>{
    let max =arr[0];
    let min = arr[0];
for( let item of arr){
    if(item>max){
      max=item;

    }
    if(min>item){
        min=item;

    }
}
return [max,min];
}
let arr2 = [];
arr2 = HighAndLow(arr);
console.log(arr2[0]+" "+arr2[1]);