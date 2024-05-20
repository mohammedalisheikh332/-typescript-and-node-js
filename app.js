"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.year}`);
    }
};
laptop.describe();
