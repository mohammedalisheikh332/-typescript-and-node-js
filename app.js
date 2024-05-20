var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ['karachi', 'Dubai', 'Mumbai', 'London', 'Auckland'];
console.log('origianl:' + place);
console.log('copy' + __spreadArray([], place, true).sort());
console.log('origianl' + place);
console.log('copy' + __spreadArray([], place, true).sort().reverse());
console.log('copy' + __spreadArray([], place, true).sort().reverse());
console.log('origianl' + place.sort());
console.log('origianl' + place.sort().reverse());
