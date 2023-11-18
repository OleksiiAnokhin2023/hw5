let people_rep = [1, 5, 6, 3, 4, 2];
let man_num = 3;
let group_1 = [];
let group_2 = [];
let b= 0;
let arr_length =people_rep.length;
let max_rep;

if(man_num<32 && arr_length%man_num===0){
function find_group(){
    for (let a = b; a < arr_length; a += (arr_length / man_num)) {
        group_1.push(people_rep[a]);

    }

    let q = group_1.reduce((sum, current) => sum + current);
    group_2.push(q);
    b++;
    group_1 = [];
    console.log(group_1);
    console.log(group_2);
    return group_2;
}
while (b!==arr_length / man_num){
    find_group();

}
max_rep = Math.max(...group_2);
}
console.log(max_rep);
