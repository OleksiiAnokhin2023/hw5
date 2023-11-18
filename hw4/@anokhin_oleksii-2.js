class Vectors {
    constructor(elements) {
        this.elements = elements;
    }
    add(vector){
        if (this.elements.length !== vector.length) {
            throw new Error('Vectors must be of the same length for subtraction.');
        }
        let result = [];
for(let i=0; i<this.elements.length;i++){
    result.push(this.elements[i] + vector[i]);
}
return result;
}
    subtract(vector){
        if (this.elements.length !== vector.length) {
            throw new Error('Vectors must be of the same length for subtraction.');
        }
        let result = [];
        for(let i=0; i<this.elements.length;i++){
            result.push(this.elements[i] - vector[i]);
        }
        return result;
    }



    dot(vector){
        if (this.elements.length !== vector.length) {
            throw new Error('Vectors must be of the same length for subtraction.');
        }
        let result = 0;
        for(let i=0; i<this.elements.length;i++){
            result += this.elements[i]*vector[i];
        }
        return result;
    }
   norm(){
       let result =0;
        for(let i = 0; i < this.elements.length; i++){
            result += Math.pow(this.elements[i],2);
        }
        return Math.sqrt(result);
    }
    to_String(){
return `'(${this.elements.join(',')})'`;
    }
    If_equals(vector){
        if (this.elements.length !== vector.length) {
            throw new Error('Vectors must be of the same length for subtraction.');
        }
        for(let i=0; i<this.elements.length;i++){
            if(this.elements[i] !== vector[i]){
                return false;
            }
            else return true;
        }
    }
}
const vector1 = new Vectors([1, 2, 3]);
const vector2 = [4, 5, 6];

const result = vector1.add(vector2);
console.log(result); // Output: [5, 7, 9]
const result1 = vector1.subtract(vector2);
console.log(result1);
const result2 = vector1.dot(vector2);
console.log(result2);
const result3 = vector1.norm();
console.log(result3);
const result4 = vector1.to_String();
console.log(result4);

console.log(vector1.If_equals(vector2));