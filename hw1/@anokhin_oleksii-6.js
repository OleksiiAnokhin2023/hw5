
let num =45809785942323476575675634;
let arr = Array.from(num.toString(), Number)
let max_nums = [];
while (arr.length !== 0) {
    let maxValue = Math.max(...arr);
    max_nums.push(maxValue);
    arr.splice(arr.indexOf(maxValue), 1);
}

let g = String(max_nums.join(""));
console.log(g);
