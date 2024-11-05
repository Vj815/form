
let myArray = [];


const myObject = { name: 'John Doe', age: 30 ,hoddy:'cricket'};

function appendObject()

{
    myArray.push(myObject);
    document.getElementById('result').innerText = `Array after appending object: ${JSON.stringify(myArray)}`;
}

function checkIfArray()
 {
    const isArray = Array.isArray(myArray);
    updateResult(`Is myArray an array? ${isArray}`);
}

function updateResult(message)
 {
    document.getElementById('result').innerText = message;
}
