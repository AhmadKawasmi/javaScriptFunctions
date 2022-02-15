const sum = function(num1, num2) { //takes parameters and return values
    const sum = num1 + num2
    return sum
}

console.log(
    sum(5, 6)
);


const sayHello = function() { // dosen't take parameters and dosent return values
    console.log('Hello World!');
}


const specialChar = function(str, specialChar) {
    let counter = 0
    for (let i = 0; str[i]; i++) {
        for (let j = 0; specialChar[j]; j++) {
            if (str[i] == specialChar[j]) {
                counter++
            }

        }

    }
    return counter
}

console.log(
    specialChar('JSHDJSBDJ934903*^#$RT$R$#^%&@#*', '*&^%')
);

const factorial = function(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
        result = result * i

    }

    return result;
}
console.log(
    factorial(10));


const speWord = function(str, value) {
    let key = ''
    for (let i = 0; str[i]; i++) {
        if (str[i] != '#') {
            key += str[i]
        }
    }
    return key
}

console.log(
    speWord('ahmad is ahmad #hello# ashjgd #ha#sd', 'yesss')

);


// const replacKey = function(str,value){
//     let key = ''
//     for (let i = 0; str[i]; i++) {
//         if (str[i] == '#') {

//         }

//     }
// }    


const replaceKey = function(str, value) {
    let newStr = ''
    let isReadingKey = false
    let foundKey = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '#') {
            isReadingKey = !isReadingKey
            foundKey = false
        }
        if (isReadingKey) {
            if (!foundKey) {
                newStr += value
                foundKey = true
            }

        } else {
            newStr += str[i] == '#' ? '' : str[i]
        }
    }
    console.log(newStr);
    return newStr
}