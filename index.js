// function AddInputs()
// {
//     var total = 0;
//     var collect = document.getElementsByTagName("input")
//     for ( var i = 0; i<collect.length; ++i)
//     {
//         var ele = collect[i];
//         total += parseInt(ele.value);
//     }
//     var Display = document.getElementById("Display");
//     Display.innerHTML = "Your Output is " + total;
// }



document.getElementById('testCaseCount').addEventListener('change', function() {
    const container = document.getElementById('testCasesContainer');
    container.innerHTML = '';
    const count = parseInt(this.value);
    for (let i = 0; i < count; i++) {
        container.innerHTML += `
            <label for="testCase${i}">Test Case ${i + 1}:</label>
            <input type="number" id="testCase${i}" min="1" max="1000000" required>
            <br><br>
        `;
    }
});


function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

function calculateSum() {
    const count = parseInt(document.getElementById('testCaseCount').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const num = parseInt(document.getElementById(`testCase${i}`).value);
        if (num >= 1 && num <= 1000000) {
            const result = sumOfDigits(num);
            resultsDiv.innerHTML += `<div class="result-item">Sum of digits for Test Case ${i + 1}: ${result}</div>`;
        } else {
            resultsDiv.innerHTML += `<div class="result-item">Test Case ${i + 1} is out of bounds.</div>`;
        }
    }
}


function findLuckyLetter() {
    const input = document.getElementById('inputString').value;

    if (input.length !== 10) {
        alert("Input string must be of length 10.");
        return;
    }
    const luckyLetter = input[6];
    
    document.getElementById('result').textContent = `Chief's lucky letter is: ${luckyLetter}`;
}





   
   function generateTestCaseInputs() {
    const numTests = document.getElementById('numTests').value;
    const container = document.getElementById('testCasesContainer');
    container.innerHTML = ''; 
    for (let i = 0; i < numTests; i++) {
        container.innerHTML += `
            <label for="testCase${i}">Test Case ${i + 1}:</label>
            <input type="text" id="testCase${i}" name="testCase${i}" required>
            <br><br>
        `;
    }
}


function calculateCosts() {
    const numTests = document.getElementById('numTests').value;
    const results = [];
    for (let i = 0; i < numTests; i++) {
        const jewels = document.getElementById(`testCase${i}`).value;
        const jewelCount = {};
        
    
        for (let jewel of jewels) {
            jewelCount[jewel] = (jewelCount[jewel] || 0) + 1;
        }
        
        let minCost = 0;
        for (let count of Object.values(jewelCount)) {
            minCost += Math.ceil(count / 2);
        }
        
        results.push(`Cost for Test Case ${i + 1}: ${minCost}`);
    }
    
    document.getElementById('result').innerHTML =  results.join ('<br>');
}


document.getElementById('numTests').addEventListener('change', generateTestCaseInputs);


function validateCard() {
    
    var cardNumber = document.getElementById("cardNumber").value;

    if (!/^\d{13,19}$/.test(cardNumber)) {
        document.getElementById("result").innerText = "Invalid input! Please enter a number between 13 and 19 digits.";
        return;
    }

    
    var sum = 0;
    var shouldDouble = false;

    for (var i = cardNumber.length - 1; i >= 0; i--) {
        var digit = parseInt(cardNumber.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9; 
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble; 
    }

    if (sum % 10 === 0) {
        document.getElementById("result").innerText = "Valid";
    } else {
        document.getElementById("result").innerText = "Invalid";
    }
}
