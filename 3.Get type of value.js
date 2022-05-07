// Write a function that takes a value as argument
// Return the type of the value

function myFunction3(a) {
    return typeof a;
}

myFunction3(1)          // 'number'
myFunction3(false)      // 'boolean'
myFunction3({})         // 'object'
myFunction3(null)       // 'object'
myFunction3('string')   // 'string'
myFunction3(['array'])  // 'object'