let arr = ["tsar", "rat", "tar", "star", "tars", "cheese"];
let sortedWord;
let anagrams = {};
for(let a of arr) {
    sortedWord = a.split('').sort().join('');

    if(anagrams[sortedWord]){
        anagrams[sortedWord].push(a);}
    else{anagrams[sortedWord] =[a];}

}
//let result = Object(anagrams);
console.log(anagrams);