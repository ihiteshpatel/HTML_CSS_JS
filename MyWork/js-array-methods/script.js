// What is prototype?
/*function User() {
    this.name = 'George',
    this.age = 23
}
User.prototype.email = 'george@email.com';
User.prototype.userInfo = function () {
    console.log('[User name]: ', this.name, ' [User age]: ', this.age);
}
const user = new User();
console.log(user.email); // george@email.com
user.userInfo(); // [User name]: George [User age]: 23*/

//What is this?
function User () {
    this.name = 'George',
    this.age = 23,
    this.printInfo = function() {
        console.log(this);
    }
    this.orders = {
        orderId: '12345',
        printOrderId: function() {
            console.log(this);
        }
    }
}
const user = new User();
user.printInfo(); // User { name: 'George', age: 23, printInfo: [Function], orders: {orderId: '12345', printOrderId: [Function: printOrderId]}}
user.orders.printOrderId(); // {orderId: '12345', printOrderId: [Function: printOrderId]}

// Custom indexOf
/*Array.prototype.customIndexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value)
            return i;
    }
    return -1;
}
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(output.customIndexOf(2));*/

// Custom lastIndexOf
/* Array.prototype.customLastIndexOf = function (value) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] == value)
        return i;
    }
    return -1;
}
const output = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];
console.log(output.customLastIndexOf(9)); */

// Custom reverse
/* Array.prototype.customReverse = function () {
    let left = 0;
    let right = this.length - 1;
    while (left < right) {
        let temp = this[left];
        this[left] = this[right];
        this[right] = temp;
        left++;
        right--;
    }
    return this;
}
const output = [1, 'b', 'abc', {name: 'John'}, 10];
console.log(output.customReverse()); */

// Custom forEach
/* Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
output.customForEach(elem => {
    console.log(elem);
});*/

// Custom map
/* Array.prototype.customMap = function map(callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(callback(this[i], i, this));
    }
    return results;
}
let output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
output = output.customMap(elem => {
    return 3*elem;
});
console.log(output); */

// Custom filter
/* Array.prototype.customFilter = function (callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
        results.push(this[i]);
    }
    return results;
}
let output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
output = output.customFilter((elem) => {
    return elem % 2 === 0;
});
console.log(output); */

// Custom reduce
Array.prototype.customReduce = function (callback, initialValue) {
    let value = initialValue;
    for (let i = 0; i < this.length; i++) {
        value = callback(value, this[i]);
    }
    return value;
}
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = output.customReduce((acc = 0, elem) => {
    return acc + elem;
});
console.log(sum);