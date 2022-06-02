

let areglos = [1,5,3,8,9,6,4];

for(let i = 0; i < areglos.length; i++){
    for(let j=0; i<areglos.length; i++){
        if(areglos[i] < areglos[j]){
            [areglos[j], areglos[i]]= [areglos[i], areglos[j]];
            console.log( [areglos[i], areglos[j]])
        }
    }
}

console.log(areglos)