function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = `Reversed String: ${reversed}`;
}
function checkPalindrome() 
{
    const inputString = document.getElementById('inputString').value;
    const len=inputString.length;
    let result = "The string is a palindrome";
    for (let i = 0; i < len / 2; i++)
         {
        if (inputString[i] !== inputString[len - 1 - i]) {
            result = "The string is not a palindrome";
            break; // Exit the loop early if a mismatch is found
        }
    }
    document.getElementById("result").innerText = result;
    // const newTest=inputString.replace('vijay','ajay');

    // document.getElementById("result").innerText = newTest;
}

