//Problem 1


function isBestFriend(friend1, friend2) {
    return friend1.friend === friend2.name && friend2.friend === friend1.name;
}

let friend1 = {
    name: "abul", friend: "babul"
};

let friend2 = { name: "babul", friend: "abul" };

let result = isBestFriend(friend1, friend2);

console.log(result);

//Problem 2

function isJavaScriptFile(fileName) {
    
    return fileName.endsWith('.js');
}


let file1 = 'app.js';
let file2 = 'js.png';
let file3 = 'image.js.png';
let file4 = 'image.jpg.js';


console.log(isJavaScriptFile(file1)); 
console.log(isJavaScriptFile(file2)); 
console.log(isJavaScriptFile(file3)); 
console.log(isJavaScriptFile(file4)); 

//problem 3

function radianToDegree(radian) {
    let degree = radian * (180/Math.PI);
    return parseFloat(degree.toFixed(2));
}
let d1 = radianToDegree(10);
let d2 = radianToDegree(25);
let d3 = radianToDegree(199);

console.log(d1);
console.log(d2);
console.log(d3);