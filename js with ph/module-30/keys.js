const glass = {
    name : 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

const keys = Object.keys(glass);// to get a keys array /properties from object
const value = Object.values(glass);// to get values array from Objects
console.log(value)
console.group(keys);
const pair = Object.entries(glass); // to get keys and values pair from objects // its array of array or two dimensionalarray
console.log(pair);

//to delete an property from object
delete glass.isCleaned
console.log(glass);

//to distructuring  an propertys from objects
const {isCleaned, ...rest} = glass; // its means to create a new objects except isCleand // its also using to delete an item from objects
console.log(glass);


//to freeze an object
// Object.freeze(glass);// if we freeze object then any item doesnt add or detele
// glass.source = 'bangladesh';
// console.log(glass);

// to seal an objects
Object.seal(glass);// seal can modifing a object properties
glass.price = 5000;
console.log(glass);


