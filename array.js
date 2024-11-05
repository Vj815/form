
let array = [1, 2, 3, 4, 5, 6];

function updateResult(message)
 {
    document.getElementById('result').innerText = message;
}

function removeElementFromArray(valueToRemove)
 {
    const index = array.indexOf(valueToRemove);
    if (index > -1) {
        array.splice(index, 1);
        updateResult(`Array after removing ${valueToRemove}: ${array}`);
    } else {
        updateResult(`${valueToRemove} not found in the array.`);
    }
}
function checkValueInArray(valueToCheck)
 {
    const contains = array.includes(valueToCheck);
    updateResult(`Array contains ${valueToCheck}? ${contains}`);
}
function emptyArray() 
{
    array.length = 0;
    updateResult(`Array after emptying: ${array}`);
}
