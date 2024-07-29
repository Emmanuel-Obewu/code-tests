function AddInputs()
{
    var total = 0;
    var coll = document.getElementsByTagName("input")
    for ( var i = 0; i<coll.length; ++i)
    {
        var ele = coll[i];
        total += parseInt(ele.value);
    }
    var Display = document.getElementById("Display");
    if(Number){
    Display.innerHTML = "Your Output is " + total;

} else{
  console.log("Error")
}
}



// Function to find Chef's lucky letter
function findLuckyLetter() {
    const input = document.getElementById('inputString').value;

    if (input.length !== 10) {
        alert("Input string must be of length 10.");
        return;
    }
    const luckyLetter = input[6];
    
    document.getElementById('result').textContent = `Chief's lucky letter is: ${luckyLetter}`;
}





   // Function for jewelry cost
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
