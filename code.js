// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function add(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string"){
        return false;
    } else {
        return num1 + num2
    }
}

function sayHello(username) {
    if (typeof username==="boolean" || username ===undefined || username===null) {
        return "Hello, World!";
    } else {
        return "Hello, " + username + "!";
    }
}

