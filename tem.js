typescript;
function convertTemperature(temp, unit) {
    if (unit.toLowerCase() === 'c') {
        // Convert Celsius to Fahrenheit
        return (temp * 9 / 5) + 32;
    }
    else if (unit.toLowerCase() === 'f') {
        // Convert Fahrenheit to Celsius
        return (temp - 32) * 5 / 9;
    }
    else {
        // Invalid unit
        throw new Error("Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}
// Example usage:
console.log(convertTemperature(20, 'C')); // Output: 68
console.log(convertTemperature(68, 'F')); // Output: 20
