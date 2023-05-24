var arrayIos = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

console.table(arrayIos);
console.log(arrayIos.length);
console.log(arrayIos[6]);
console.log(arrayIos.toString());
console.log(arrayIos.join("/"))
var array2Ios = arrayIos.unshift("IOS");
console.log(arrayIos.length)

// Array Bidimensional
var arrayBiIos = 
[
    ["HTML", 1993, "CSS", 1996,],
    [ "Bootstrap", 2011, "JS", 1995,],
    [ "React", 2013, "Java", 1995]
];

console.table(arrayBiIos);
console.table(arrayBiIos.length);
console.log(arrayBiIos[2][1]);
arrayBiIos[1][2] = "javaScript";
console.log(arrayBiIos)
console.log(delete arrayBiIos[2][2]);
let novoArrayBiIOs = arrayBiIos[2].push('pipoca');