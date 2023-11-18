let abc1 = "abcdefghijklmnopqrstuvwxyz";
let key = "password";
let text = "codewarssdfsffdsf";

function Key_to_text(key, text) {
    let key_0_0 = key;
    while (key_0_0.length < text.length) {
        key_0_0 += key;
    }
    while (key_0_0.length !== text.length) {
        key_0_0 = key_0_0.slice(0, -1);
    }
    return key_0_0;
}

console.log(Key_to_text(key, text));

function To_mass(abc1) {
    let abc = abc1.split("");
    return abc;
}

function To_num(abc, key) {
    let key1 = To_mass(key);
    let intersections = [];

    for (let keyItem of key1) {
        let index = abc.indexOf(keyItem);
        intersections.push(index);
    }
    return intersections;
}

console.log(To_num(To_mass(abc1), key));

class VigenèreCipher {
    constructor(key, abc) {
        this.key = key;
        this.abc = abc;
    }

    encode(str) {
        let key_0 = Key_to_text(this.key, str);
        let keyNum = To_num(this.abc, key_0);
        let textNum = To_num(this.abc, str);
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if(this.abc.includes(str[i])){
                let charIndex = (textNum[i] + keyNum[i]) % this.abc.length;
                result += this.abc[charIndex];}
            else{
                result += str[i];
            }
        }

        return result;
    }

    decode(str) {
        let key_0 = Key_to_text(this.key, str);
        let keyNum = To_num(this.abc, key_0);
        let textNum = To_num(this.abc, str);
        let result = "";

        for (let i = 0; i < str.length; i++) {
            if(this.abc.includes(str[i])){
                let charIndex = (textNum[i] - keyNum[i] + this.abc.length) % this.abc.length;
                result += this.abc[charIndex];
            }
            else{
                result += str[i];
            }
        }

        return result;
    }
}

let c = new VigenèreCipher(key, To_mass(abc1), text);