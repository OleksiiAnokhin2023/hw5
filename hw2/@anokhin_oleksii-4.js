let truck  =[["[IIII]", "[llll]", "[1111]", "[@@@@]", "[||||]", "[║║║║]"]];//[["(----)", "[IIII]", "_HHH_"], ["IuI", "[))))]", "zz"], ["[@@@@]", "UwU", "[IlII]"]];
let goods = truck.flat();
let symbols;
let resul_sos = [];
let sos=[];
for(let a of goods) {
    if (a.includes("[") && a.includes("]")) {
        sos.push(a.slice(1, -1));
    }}
    let filterSos = sos.filter((b) => {
        if (b.length % 4 === 0) {

            for (let i = 1; i < b.length; i++) {
                if (b[i] !== b[0]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    });

for (let i=0; i<filterSos.length; i++){
    if ( (i+1)%5 !==0) {
        resul_sos.push(filterSos[i]);
    }}
symbols = resul_sos.join(' ');
new_mass= symbols.replace(/ /g, '').split("").join(" ");
console.log(`'${new_mass}'`);