let bilding_volum = 1071225;
let block_volum = 0;
let block_number =0;
while (block_volum<bilding_volum){
    block_number++;
    block_volum += block_number**3;}
if (block_volum!==bilding_volum){
    block_number= -1;}


console.log(block_number);