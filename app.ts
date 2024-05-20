// lowercase
let personName: string= "Ali";
console.log("lowercase:", personName.toLowerCase());

// uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

//title case
console.log("title:", personName.replace(/\bw/g,c => c.toUpperCase()));