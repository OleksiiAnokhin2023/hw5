let arr = [20,10,-80,10,10,15,35];
let i;
let sum1;
let sum2;
function FindIndex(arr){
    for( i=0;i<arr.length;i++){
        sum1 = arr.slice(0,i).reduce((sum, current)=>sum+current,0);
        sum2 = arr.slice(i+1).reduce((sum, current)=>sum+current,0);

        if(sum1===sum2){
            return i;
        }}
    return -1;
}
console.log(FindIndex(arr));