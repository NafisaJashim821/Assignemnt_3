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

