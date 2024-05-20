// lowercase
var personName = "Ali";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("title:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
