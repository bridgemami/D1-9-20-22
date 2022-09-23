//hello world
/* hello
-
world*/
let mike= 'Michael Bridgeman';
console.log(mike);
console.log(mike.length);
const salad='salad';
console.log(salad);
//primitive data structure
var string = 'hello world';
var number = Number('5');
var boolean = true;
//complex data structure
var array = [1, 'two', 3, 'four', 5];
var object = {"word": "hello",
            "number": 6,
            "boolean": false};
var undef =undefined;
var nulls = null;

var func = function add (a,b) {return a + b};
console.log(string + '\n' + number + '\n' + boolean + '\n' + array + '\n' + object + '\n' + + undef + '\n' + nulls);
console.log(array[1])
console.log(nulls + '\n' + undef);
console.log(func(5,6))